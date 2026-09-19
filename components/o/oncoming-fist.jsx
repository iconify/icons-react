import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gn99un74y.css';
import '../../css/p/pzu7n0f2i.css';
import '../../css/v/vko700nqz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gn99un74y"/><path class="pzu7n0f2i"/><path class="vko700nqz"/></g>`,
		"fallback": "fluent-emoji-flat:oncoming-fist",
	});
}

export default Component;
