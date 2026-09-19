import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iukgmv2cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iukgmv2cl"/>`,
		"fallback": "griddy-icons:refresh",
	});
}

export default Component;
