import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u62_j_zii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u62_j_zii"/>`,
		"fallback": "lucide:list-chevrons-up-down",
	});
}

export default Component;
