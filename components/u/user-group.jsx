import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz9dst_jq.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz9dst_jq"/>`,
		"fallback": "vs:user-group",
	});
}

export default Component;
