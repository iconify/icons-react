import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y58kh1nko.css';
import '../../css/b/b97oakqpf.css';
import '../../css/y/y8gnmo4cm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y58kh1nko"/><path class="b97oakqpf"/><path class="y8gnmo4cm"/>`,
		"fallback": "energy-icons:service-vessel-20",
	});
}

export default Component;
