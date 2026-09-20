import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu1d4drrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu1d4drrt"/>`,
		"fallback": "thesvg:livechat",
	});
}

export default Component;
