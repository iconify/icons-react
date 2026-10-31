import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2lv_5byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2lv_5byc"/>`,
		"fallback": "coolicons:link-horizontal-duotone-round",
	});
}

export default Component;
