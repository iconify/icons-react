import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kigko6rhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kigko6rhv"/>`,
		"fallback": "simple-icons:microsofttranslator",
	});
}

export default Component;
