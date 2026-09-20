import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzujfg3rl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzujfg3rl"/>`,
		"fallback": "uim:sorting",
	});
}

export default Component;
