import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gw7nf2z4x.css';
import '../../css/m/md286fbip.css';
import '../../css/b/bbtysibbk.css';
import '../../css/e/eu27vsb0f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gw7nf2z4x"/><g class="md286fbip"><path class="bbtysibbk"/><path class="eu27vsb0f"/></g></g>`,
		"fallback": "cryptocurrency-color:vtho",
	});
}

export default Component;
