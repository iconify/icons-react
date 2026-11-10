import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/echeipybo.css';
import '../../css/y/y7zl71b8a.css';
import '../../css/m/mcktajbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="echeipybo"/><path class="y7zl71b8a"/><path class="mcktajbnz"/></g>`,
		"fallback": "andrsrxn:parking",
	});
}

export default Component;
