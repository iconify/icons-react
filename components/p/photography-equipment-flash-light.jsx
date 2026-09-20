import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vcw47og0u.css';
import '../../css/o/o8ohi-l4p.css';
import '../../css/k/kd8t7p_fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vcw47og0u"/><path class="o8ohi-l4p"/><path class="kd8t7p_fs"/></g>`,
		"fallback": "streamline-ultimate:photography-equipment-flash-light",
	});
}

export default Component;
