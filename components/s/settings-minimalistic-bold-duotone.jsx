import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woc-gln8b.css';
import '../../css/x/xh_rgzqbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="woc-gln8b"/><path class="xh_rgzqbh"/>`,
		"fallback": "solar:settings-minimalistic-bold-duotone",
	});
}

export default Component;
