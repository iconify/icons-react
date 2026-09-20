import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx7mr1bdl.css';
import '../../css/k/kdu6--gsl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wx7mr1bdl"/><path class="kdu6--gsl"/>`,
		"fallback": "selfhst:retroassembly",
	});
}

export default Component;
