import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbtn4acnx.css';
import '../../css/m/md286fbip.css';
import '../../css/l/lggl8mscx.css';
import '../../css/f/f3y_24amz.css';
import '../../css/c/cs815vb7k.css';
import '../../css/r/rk5x9rxwv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="jbtn4acnx"/><g class="md286fbip"><path class="lggl8mscx"/><path class="f3y_24amz"/><path class="cs815vb7k"/><path class="rk5x9rxwv"/></g></g>`,
		"fallback": "cryptocurrency-color:shift",
	});
}

export default Component;
