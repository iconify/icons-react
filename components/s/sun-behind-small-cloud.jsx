import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7qyef9bu.css';
import '../../css/p/phvugfa-k.css';
import '../../css/p/pmh4rz-uc.css';
import '../../css/s/szady6biz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r7qyef9bu"/><path class="phvugfa-k"/><path class="pmh4rz-uc"/><path class="szady6biz"/></g>`,
		"fallback": "fluent-emoji-flat:sun-behind-small-cloud",
	});
}

export default Component;
