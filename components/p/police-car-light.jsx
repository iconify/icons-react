import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cptoxtiyw.css';
import '../../css/b/baydd4_ff.css';
import '../../css/l/lj3osmbyl.css';
import '../../css/v/v4_f2cbms.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cptoxtiyw"/><path class="baydd4_ff"/><path class="lj3osmbyl"/><path class="v4_f2cbms"/></g>`,
		"fallback": "fluent-emoji-flat:police-car-light",
	});
}

export default Component;
