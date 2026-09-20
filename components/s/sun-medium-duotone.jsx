import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gv2jrdtmw.css';
import '../../css/q/qoebk6oie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gv2jrdtmw"/><path class="qoebk6oie"/></g>`,
		"fallback": "keyline-icons:sun-medium-duotone",
	});
}

export default Component;
