import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwxs4otxq.css';
import '../../css/u/u6npppb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwxs4otxq"/><path class="u6npppb7b"/>`,
		"fallback": "streamline-ultimate:speaker-1-bold",
	});
}

export default Component;
