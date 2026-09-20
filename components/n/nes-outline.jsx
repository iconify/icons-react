import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgyosfdwx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgyosfdwx"/>`,
		"fallback": "teenyicons:nes-outline",
	});
}

export default Component;
