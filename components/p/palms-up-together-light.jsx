import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5l4pnwkh.css';
import '../../css/t/ttdh2_bas.css';
import '../../css/g/gs4ffiuvm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5l4pnwkh"/><path class="ttdh2_bas"/><path class="gs4ffiuvm"/></g>`,
		"fallback": "fluent-emoji-flat:palms-up-together-light",
	});
}

export default Component;
