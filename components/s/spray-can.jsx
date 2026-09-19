import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ica58birs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ica58birs"/>`,
		"fallback": "bxs:spray-can",
	});
}

export default Component;
