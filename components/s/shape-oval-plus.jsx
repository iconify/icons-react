import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etw_cjf_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etw_cjf_v"/>`,
		"fallback": "mdi:shape-oval-plus",
	});
}

export default Component;
