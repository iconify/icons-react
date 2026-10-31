import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ualn45blm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ualn45blm"/>`,
		"fallback": "coolicons:phone-off-round",
	});
}

export default Component;
