import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xt1fr6buf.css';
import '../../css/f/fqf74lb2o.css';
import '../../css/j/j36fnwxrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="xt1fr6buf"/><circle class="fqf74lb2o"/><path class="j36fnwxrx"/></g>`,
		"fallback": "lets-icons:question-light",
	});
}

export default Component;
