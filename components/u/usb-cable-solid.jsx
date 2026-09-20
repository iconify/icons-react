import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3oyjbb4p.css';
import '../../css/e/e56i_o0sr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j3oyjbb4p"/><path class="e56i_o0sr"/>`,
		"fallback": "teenyicons:usb-cable-solid",
	});
}

export default Component;
