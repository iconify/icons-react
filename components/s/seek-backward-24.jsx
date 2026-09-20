import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq3z-t4xl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq3z-t4xl"/>`,
		"fallback": "qlementine-icons:seek-backward-24",
	});
}

export default Component;
