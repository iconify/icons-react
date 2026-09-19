import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbxxnv_xu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbxxnv_xu"/>`,
		"fallback": "dinkie-icons:slice-of-pizza",
	});
}

export default Component;
