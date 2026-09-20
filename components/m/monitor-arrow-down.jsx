import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyb2-dbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyb2-dbjq"/>`,
		"fallback": "mdi:monitor-arrow-down",
	});
}

export default Component;
