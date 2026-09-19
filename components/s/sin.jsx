import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk1hzjbgp.css';
import '../../css/m/md286fbip.css';
import '../../css/j/jzowogbqz.css';
import '../../css/w/wsyxhjaet.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="kk1hzjbgp"/><g class="md286fbip"><path class="jzowogbqz"/><path class="wsyxhjaet"/></g></g>`,
		"fallback": "cryptocurrency-color:sin",
	});
}

export default Component;
