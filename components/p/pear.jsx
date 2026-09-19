import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c929iaczw.css';
import '../../css/s/sdfp2cbci.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c929iaczw"/><path class="sdfp2cbci"/></g>`,
		"fallback": "fluent-emoji-flat:pear",
	});
}

export default Component;
