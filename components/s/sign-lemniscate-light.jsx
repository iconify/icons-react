import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmlc81trv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmlc81trv"/>`,
		"fallback": "iconamoon:sign-lemniscate-light",
	});
}

export default Component;
