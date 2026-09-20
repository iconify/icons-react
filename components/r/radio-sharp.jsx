import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xohei9bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xohei9bqn"/>`,
		"fallback": "keyline-icons:radio-sharp",
	});
}

export default Component;
