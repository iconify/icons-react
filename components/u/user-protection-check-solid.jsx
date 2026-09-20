import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h090gtm4m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h090gtm4m"/>`,
		"fallback": "streamline-plump:user-protection-check-solid",
	});
}

export default Component;
