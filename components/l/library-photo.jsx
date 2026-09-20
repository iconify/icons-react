import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ya2sk7ccw.css';
import '../../css/e/ea1hc3bgb.css';
import '../../css/v/va2daxbvw.css';
import '../../css/f/f-734achj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ya2sk7ccw"/><path class="ea1hc3bgb"/><path class="va2daxbvw"/><path class="f-734achj"/></g>`,
		"fallback": "tabler:library-photo",
	});
}

export default Component;
