import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvet1dxks.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvet1dxks"/>`,
		"fallback": "fluent-mdl2:ringer-remove",
	});
}

export default Component;
