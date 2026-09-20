import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ga7c6dhje.css';
import '../../css/o/o3r-au_2v.css';
import '../../css/j/jgsx0zbkw.css';
import '../../css/n/nwhrt_ieq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ga7c6dhje"/><path class="o3r-au_2v"/><path class="jgsx0zbkw"/><path class="nwhrt_ieq"/></g>`,
		"fallback": "streamline-ultimate-color:send-email-envelope",
	});
}

export default Component;
