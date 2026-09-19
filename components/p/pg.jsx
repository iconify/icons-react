import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vb14ysbvz.css';
import '../../css/m/mhwhjcbvw.css';
import '../../css/a/a8coxybhr.css';
import '../../css/w/w7qfhsb1m.css';
import '../../css/r/rncbqcckd.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="vb14ysbvz"/><path clip-rule="evenodd" class="mhwhjcbvw"/><path clip-rule="evenodd" class="a8coxybhr"/><path clip-rule="evenodd" class="w7qfhsb1m"/><path clip-rule="evenodd" class="rncbqcckd"/></g>`,
		"fallback": "flagpack:pg",
	});
}

export default Component;
