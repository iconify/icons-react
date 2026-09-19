import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfv-mo1dy.css';
import '../../css/n/n0rf62bgo.css';
import '../../css/c/c1xidzbgj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bfv-mo1dy"/><path class="n0rf62bgo"/><path class="c1xidzbgj"/></g>`,
		"fallback": "fluent-emoji-flat:reminder-ribbon",
	});
}

export default Component;
