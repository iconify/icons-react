import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa4ogyunu.css';
import '../../css/h/hntgybcog.css';
import '../../css/j/jvu6wz0nf.css';
import '../../css/t/t1tgaf0_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGeNSNdbqp" class="xa4ogyunu"/></defs><g class="hntgybcog"><use href="#SVGeNSNdbqp"/><use href="#SVGeNSNdbqp"/><path class="jvu6wz0nf"/><path class="t1tgaf0_s"/></g>`,
		"fallback": "iconoir:podcast",
	});
}

export default Component;
