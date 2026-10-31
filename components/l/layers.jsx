import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/ff-4b0k_p.css';
import '../../css/d/dud-zxsjg.css';
import '../../css/j/j8_jq-vdt.css';
import '../../css/o/o7lo4wbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="ff-4b0k_p"/><rect class="dud-zxsjg"/><rect class="j8_jq-vdt"/><path class="o7lo4wbvl"/></g>`,
		"fallback": "struq:layers",
	});
}

export default Component;
