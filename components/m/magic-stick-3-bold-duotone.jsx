import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg7argb-b.css';
import '../../css/g/gfaea2w_j.css';
import '../../css/i/imc05mbed.css';
import '../../css/a/a-4v7vhmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg7argb-b"/><path class="gfaea2w_j"/><path class="imc05mbed"/><path class="a-4v7vhmv"/>`,
		"fallback": "solar:magic-stick-3-bold-duotone",
	});
}

export default Component;
