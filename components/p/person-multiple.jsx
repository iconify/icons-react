import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahu42d9pb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahu42d9pb"/>`,
		"fallback": "proicons:person-multiple",
	});
}

export default Component;
