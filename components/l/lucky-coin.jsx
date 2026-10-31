import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z6ndlsldf.css';
import '../../css/g/grxhffbhv.css';
import '../../css/d/dhh1urbvj.css';
import '../../css/k/kgoitsb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow z6ndlsldf"/><path class="grxhffbhv wm-shadow"/><path class="dhh1urbvj"/><path class="kgoitsb9v"/></g>`,
		"fallback": "withicons-brutal:lucky-coin",
	});
}

export default Component;
