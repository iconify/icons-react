import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qut7gns8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qut7gns8a"/>`,
		"fallback": "coolicons:video-off-fill-round",
	});
}

export default Component;
