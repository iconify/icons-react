import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovx5lsblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovx5lsblj"/>`,
		"fallback": "thesvg-color:teamviewer",
	});
}

export default Component;
