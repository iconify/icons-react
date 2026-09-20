import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlch2l75t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlch2l75t"/>`,
		"fallback": "selfhst:microsoft-sharepoint-dark",
	});
}

export default Component;
