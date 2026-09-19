import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4so4lb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4so4lb9u"/>`,
		"fallback": "griddy-icons:lock-open-alt-02-filled",
	});
}

export default Component;
