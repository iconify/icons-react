import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avfrtjb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avfrtjb5x"/>`,
		"fallback": "mage:verified-check-fill",
	});
}

export default Component;
