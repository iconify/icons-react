import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0o80mktc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0o80mktc"/>`,
		"fallback": "selfhst:recipesage-light",
	});
}

export default Component;
