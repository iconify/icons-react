import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bqxzm4b2o.css';
import '../../css/k/kj2l08bic.css';
import '../../css/t/t4b00jbkf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bqxzm4b2o"/><path class="kj2l08bic"/><path class="t4b00jbkf"/></g>`,
		"fallback": "fluent-emoji-flat:pen",
	});
}

export default Component;
