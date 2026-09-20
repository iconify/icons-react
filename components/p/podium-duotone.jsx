import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t7l4jhy0j.css';
import '../../css/j/jre5zhbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t7l4jhy0j"/><path class="jre5zhbtq"/></g>`,
		"fallback": "keyline-icons:podium-duotone",
	});
}

export default Component;
