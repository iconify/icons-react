import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_hxwwbci.css';
import '../../css/d/dpnipcczy.css';
import '../../css/p/poiuuuhna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_hxwwbci"/><path class="dpnipcczy"/><path class="poiuuuhna"/>`,
		"fallback": "tdesign:task-add-filled",
	});
}

export default Component;
