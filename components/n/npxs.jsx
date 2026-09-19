import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ip-c2mbtb.css';
import '../../css/m/md286fbip.css';
import '../../css/q/qt4d1naee.css';
import '../../css/h/hvd63zboa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ip-c2mbtb"/><g class="md286fbip"><path class="qt4d1naee"/><path class="hvd63zboa"/></g></g>`,
		"fallback": "cryptocurrency-color:npxs",
	});
}

export default Component;
