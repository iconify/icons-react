import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-5ygck_n.css';
import '../../css/e/e_kfhmj_p.css';
import '../../css/i/i2ed-zb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-5ygck_n"/><path class="e_kfhmj_p"/><path clip-rule="evenodd" class="i2ed-zb3p"/>`,
		"fallback": "solar:panels-bottom-right-bold",
	});
}

export default Component;
