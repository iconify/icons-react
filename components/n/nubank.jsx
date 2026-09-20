import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho_nvabvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho_nvabvc"/>`,
		"fallback": "simple-icons:nubank",
	});
}

export default Component;
