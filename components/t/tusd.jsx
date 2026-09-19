import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-64p5ubv.css';
import '../../css/m/md286fbip.css';
import '../../css/b/bdw0vhb6r.css';
import '../../css/w/w40ak50xy.css';
import '../../css/w/w_01-_bnw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="x-64p5ubv"/><g class="md286fbip"><path class="bdw0vhb6r"/><path class="w40ak50xy"/><path class="w_01-_bnw"/></g></g>`,
		"fallback": "cryptocurrency-color:tusd",
	});
}

export default Component;
