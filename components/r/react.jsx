import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4v1z1bxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x4v1z1bxi"/>`,
		"fallback": "griddy-icons:react",
	});
}

export default Component;
