import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax1grob-r.css';
import '../../css/x/x97sh721c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax1grob-r"/><path class="x97sh721c"/>`,
		"fallback": "pixel:phone-ringing-high-solid",
	});
}

export default Component;
