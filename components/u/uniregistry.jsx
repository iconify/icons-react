import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq-j5olxh.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq-j5olxh"/>`,
		"fallback": "fa6-brands:uniregistry",
	});
}

export default Component;
