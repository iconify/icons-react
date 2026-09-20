import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tox88-zbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tox88-zbo"/>`,
		"fallback": "selfhst:pfsense-light",
	});
}

export default Component;
