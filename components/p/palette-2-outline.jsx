import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wco_tabkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wco_tabkv"/>`,
		"fallback": "solar:palette-2-outline",
	});
}

export default Component;
