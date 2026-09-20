import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ygllgsyib.css';
import '../../css/z/zkybhkbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ygllgsyib"/><path class="zkybhkbrj"/></g>`,
		"fallback": "majesticons:tooltips",
	});
}

export default Component;
