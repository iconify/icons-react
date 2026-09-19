import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwzqo-bou.css';
import '../../css/d/dt1emtbnl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwzqo-bou"/><path class="dt1emtbnl"/>`,
		"fallback": "famicons:return-down-back",
	});
}

export default Component;
