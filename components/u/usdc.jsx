import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9-ia0b3w.css';
import '../../css/m/md286fbip.css';
import '../../css/v/vto4svfiq.css';
import '../../css/s/s0ju3ibka.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="f9-ia0b3w"/><g class="md286fbip"><path class="vto4svfiq"/><path class="s0ju3ibka"/></g></g>`,
		"fallback": "cryptocurrency-color:usdc",
	});
}

export default Component;
