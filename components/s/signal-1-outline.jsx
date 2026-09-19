import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd4gsf7oq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zd4gsf7oq"/>`,
		"fallback": "glyphs:signal-1-outline",
	});
}

export default Component;
