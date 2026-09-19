import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr_4g-e8s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr_4g-e8s"/>`,
		"fallback": "dinkie-icons:telegram",
	});
}

export default Component;
