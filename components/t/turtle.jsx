import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lghlm4bpj.css';
import '../../css/m/m4wuqrben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lghlm4bpj"/><path class="m4wuqrben"/></g>`,
		"fallback": "vadivam:turtle",
	});
}

export default Component;
