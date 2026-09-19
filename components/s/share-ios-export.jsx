import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzi7qo5ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzi7qo5ju"/>`,
		"fallback": "ci:share-ios-export",
	});
}

export default Component;
