import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av4hyxbon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av4hyxbon"/>`,
		"fallback": "selfhst:powershell-universal-light",
	});
}

export default Component;
