import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv3lvgb1x.css';
import '../../css/l/ldo0svbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv3lvgb1x"/><path class="ldo0svbxl"/>`,
		"fallback": "stash:lock-opened-light",
	});
}

export default Component;
