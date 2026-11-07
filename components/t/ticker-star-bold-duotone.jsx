import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l17661bjv.css';
import '../../css/q/qhhul4b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l17661bjv"/><path class="qhhul4b8a"/>`,
		"fallback": "solar:ticker-star-bold-duotone",
	});
}

export default Component;
