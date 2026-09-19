import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fafuwybri.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fafuwybri"/>`,
		"fallback": "icon-park-outline:pisces",
	});
}

export default Component;
