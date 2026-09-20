import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2dx1rbn.css';
import '../../css/c/co3ln_bdz.css';
import '../../css/e/ef_rn3vnq.css';
import '../../css/o/ojti8sbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="at2dx1rbn"><path class="co3ln_bdz"/><path class="ef_rn3vnq"/><path class="ojti8sbnk"/></g>`,
		"fallback": "streamline-cyber-color:synchronize-loop",
	});
}

export default Component;
