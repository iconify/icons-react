import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx_bzmb5r.css';
import '../../css/w/wg9upwoxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx_bzmb5r"/><path clip-rule="evenodd" class="wg9upwoxr"/>`,
		"fallback": "qlementine-icons:shakers-24",
	});
}

export default Component;
