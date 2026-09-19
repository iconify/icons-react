import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l80e67qml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l80e67qml"/>`,
		"fallback": "hugeicons:mic-off-01",
	});
}

export default Component;
