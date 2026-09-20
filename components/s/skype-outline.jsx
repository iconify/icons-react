import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-3cwvmmg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-3cwvmmg"/>`,
		"fallback": "teenyicons:skype-outline",
	});
}

export default Component;
