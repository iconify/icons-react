import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h38z5cbna.css';
import '../../css/w/w7ornbcbe.css';
import '../../css/q/q8pf6hbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h38z5cbna"/><path class="w7ornbcbe"/><path class="q8pf6hbpe"/></g>`,
		"fallback": "tabler:tabs",
	});
}

export default Component;
