import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2irj2bce.css';
import '../../css/z/z28cvgb5x.css';
import '../../css/t/ti2wvyuux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2irj2bce"/><path class="z28cvgb5x"/><path class="ti2wvyuux"/></g>`,
		"fallback": "si:user-alt-duotone",
	});
}

export default Component;
