import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krw35zlyq.css';
import '../../css/b/byoze1bep.css';
import '../../css/v/vdz_zbbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krw35zlyq"/><path class="byoze1bep"/><path clip-rule="evenodd" class="vdz_zbbus"/>`,
		"fallback": "solar:text-bold-square-bold",
	});
}

export default Component;
