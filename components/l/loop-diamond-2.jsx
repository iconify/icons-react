import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2dx1rbn.css';
import '../../css/m/mkkam-3zu.css';
import '../../css/o/ohd43jbpw.css';
import '../../css/e/ecgznvajd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="at2dx1rbn"><path class="mkkam-3zu"/><path class="ohd43jbpw"/><path class="ecgznvajd"/></g>`,
		"fallback": "streamline-cyber-color:loop-diamond-2",
	});
}

export default Component;
