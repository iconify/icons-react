import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfwc7mqrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfwc7mqrl"/>`,
		"fallback": "keyline-icons:panel-right-dashed-sharp",
	});
}

export default Component;
