import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkkbxsb0h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkkbxsb0h"/>`,
		"fallback": "fluent-mdl2:list-mirrored",
	});
}

export default Component;
