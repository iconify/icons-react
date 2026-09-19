import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-1pmndiw.css';
import '../../css/k/k5j47ybbj.css';
import '../../css/f/fxa1sgb9k.css';
import '../../css/y/yzglel7sy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-1pmndiw"/><path class="k5j47ybbj"/><path class="fxa1sgb9k"/><path class="yzglel7sy"/></g>`,
		"fallback": "fluent-emoji-flat:rosette",
	});
}

export default Component;
