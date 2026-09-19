import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv8augtve.css';
import '../../css/z/z1i2occ_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv8augtve"/><path class="z1i2occ_q"/>`,
		"fallback": "boxicons:phone-book",
	});
}

export default Component;
