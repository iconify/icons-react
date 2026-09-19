import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pma34jxip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pma34jxip"/>`,
		"fallback": "boxicons:proper-superset",
	});
}

export default Component;
