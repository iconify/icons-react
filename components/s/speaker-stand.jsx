import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-mqn4bbl.css';
import '../../css/f/f6ex0_t5k.css';
import '../../css/n/n67oa5bpd.css';
import '../../css/g/gpj8g2b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-mqn4bbl"/><path class="f6ex0_t5k"/><path class="n67oa5bpd"/><path class="gpj8g2b5a"/></g>`,
		"fallback": "streamline-freehand-color:speaker-stand",
	});
}

export default Component;
