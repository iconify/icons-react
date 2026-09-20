import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g5hzoibvf.css';
import '../../css/y/ycbr2ubsi.css';
import '../../css/n/n958a9tgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g5hzoibvf"/><path class="ycbr2ubsi"/><path class="n958a9tgh"/></g>`,
		"fallback": "keyline-icons:piggy-bank-duotone",
	});
}

export default Component;
