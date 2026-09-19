import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk9lgc8st.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zk9lgc8st"/>`,
		"fallback": "glyphs:object-ungroup-outline",
	});
}

export default Component;
