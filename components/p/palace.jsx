import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/skhp3bbjf.css';
import '../../css/a/a-o1j2cod.css';
import '../../css/m/m08pv8t2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="skhp3bbjf"/><path class="a-o1j2cod"/><path class="m08pv8t2e"/></g>`,
		"fallback": "tdesign:palace",
	});
}

export default Component;
