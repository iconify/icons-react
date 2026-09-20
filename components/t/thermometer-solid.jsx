import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo5hpmgny.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zo5hpmgny"/>`,
		"fallback": "streamline-plump:thermometer-solid",
	});
}

export default Component;
