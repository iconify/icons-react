import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt_jtfb1h.css';
import '../../css/g/gw8h__b-x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt_jtfb1h"/><path class="gw8h__b-x"/>`,
		"fallback": "devicon:postcss-wordmark",
	});
}

export default Component;
