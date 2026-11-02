import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc6m9fbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc6m9fbdo"/>`,
		"fallback": "mingcute:package-fill",
	});
}

export default Component;
