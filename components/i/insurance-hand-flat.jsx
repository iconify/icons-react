import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1dt0ob2c.css';
import '../../css/j/js9nb_byl.css';
import '../../css/n/n8e16pbqa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f1dt0ob2c"/><path class="js9nb_byl"/><path clip-rule="evenodd" class="n8e16pbqa"/></g>`,
		"fallback": "streamline-color:insurance-hand-flat",
	});
}

export default Component;
