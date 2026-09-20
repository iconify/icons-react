import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz-jg2hhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz-jg2hhk"/>`,
		"fallback": "solar:map-arrow-up-broken",
	});
}

export default Component;
