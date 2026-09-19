import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss1frpkay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss1frpkay"/>`,
		"fallback": "iconoir:report-columns",
	});
}

export default Component;
