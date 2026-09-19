import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2rk88aae.css';
import '../../css/g/gc7lh6bwa.css';
import '../../css/v/v48dolbdj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2rk88aae"/><path class="gc7lh6bwa"/><path class="v48dolbdj"/></g>`,
		"fallback": "fluent-emoji-flat:oncoming-fist-dark",
	});
}

export default Component;
