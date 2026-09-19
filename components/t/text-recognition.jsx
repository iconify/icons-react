import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2w28gbbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2w28gbbv"/>`,
		"fallback": "icon-park-outline:text-recognition",
	});
}

export default Component;
