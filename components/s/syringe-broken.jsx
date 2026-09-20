import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvkt62bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvkt62bad"/>`,
		"fallback": "solar:syringe-broken",
	});
}

export default Component;
