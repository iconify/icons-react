import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shfudrbge.css';
import '../../css/a/a57dxdbyf.css';
import '../../css/q/qegqyl00j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shfudrbge"/><path class="a57dxdbyf"/><path class="qegqyl00j"/></g>`,
		"fallback": "fluent-emoji-flat:poultry-leg",
	});
}

export default Component;
