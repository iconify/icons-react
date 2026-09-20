import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vtgxl2bfl.css';
import '../../css/q/qm8lm0bxk.css';
import '../../css/r/r24s9n2mw.css';
import '../../css/g/gwohp6bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vtgxl2bfl"/><path class="qm8lm0bxk"/><path class="r24s9n2mw"/><path class="gwohp6bok"/></g>`,
		"fallback": "lucide:shrimp",
	});
}

export default Component;
