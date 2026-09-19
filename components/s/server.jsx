import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obfizfrne.css';
import '../../css/k/keee5eb3m.css';
import '../../css/m/m_084tbji.css';
import '../../css/f/fth49-b6s.css';
import '../../css/h/hjn6x0bvp.css';
import '../../css/v/vj46e_87r.css';
import '../../css/h/h2qrtnbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obfizfrne"/><circle class="keee5eb3m"/><circle class="m_084tbji"/><path class="fth49-b6s"/><circle class="hjn6x0bvp"/><circle class="vj46e_87r"/><path class="h2qrtnbdd"/>`,
		"fallback": "circum:server",
	});
}

export default Component;
