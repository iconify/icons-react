import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1csdzbsc.css';
import '../../css/b/brktsgbib.css';
import '../../css/t/tr8rqmbhf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1csdzbsc"/><path class="brktsgbib"/><path class="tr8rqmbhf"/></g>`,
		"fallback": "fluent-emoji-flat:oncoming-fist-medium-light",
	});
}

export default Component;
