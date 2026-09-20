import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjq687iou.css';
import '../../css/n/nwrt1lbjl.css';
import '../../css/y/yipyoybdp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjq687iou"/><path class="nwrt1lbjl"/><path class="yipyoybdp"/>`,
		"fallback": "streamline-pixel:interface-essential-paginate-filter-picture",
	});
}

export default Component;
