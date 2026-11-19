import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iclt8hkmy.css';
import '../../css/q/q-znkyc7p.css';
import '../../css/w/w7y4uwbrl.css';
import '../../css/l/lzce3d6_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iclt8hkmy"/><circle class="q-znkyc7p"/><circle class="w7y4uwbrl"/><path class="lzce3d6_a"/></g>`,
		"fallback": "andrsrxn:list-prohibit",
	});
}

export default Component;
