import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2x_72vy.css';
import '../../css/o/ottjqxlpz.css';
import '../../css/h/hu7q9bbvj.css';
import '../../css/i/iui5ovbws.css';
import '../../css/w/wr-sfrbaz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ij2x_72vy"><circle class="ottjqxlpz"/><circle class="hu7q9bbvj"/><circle class="iui5ovbws"/><path class="wr-sfrbaz"/></g>`,
		"fallback": "openmoji:share",
	});
}

export default Component;
