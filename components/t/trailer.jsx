import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eznk3bbmj.css';
import '../../css/a/awbga00xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eznk3bbmj"/><path class="awbga00xc"/></g>`,
		"fallback": "vadivam:trailer",
	});
}

export default Component;
