import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/orwccdbbp.css';
import '../../css/h/h181z6xlz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="orwccdbbp"/><path class="h181z6xlz"/></g>`,
		"fallback": "keyline-icons:sliders-2-horizontal-duotone",
	});
}

export default Component;
