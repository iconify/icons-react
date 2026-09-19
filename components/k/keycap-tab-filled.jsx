import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uetaizbeg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uetaizbeg"/>`,
		"fallback": "dinkie-icons:keycap-tab-filled",
	});
}

export default Component;
