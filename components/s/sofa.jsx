import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sxuvjhbsh.css';
import '../../css/g/gybz7ebzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sxuvjhbsh"/><path class="gybz7ebzj"/></g>`,
		"fallback": "withicons:sofa",
	});
}

export default Component;
