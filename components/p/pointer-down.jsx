import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhgj0q6xp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhgj0q6xp"/>`,
		"fallback": "tabler:pointer-down",
	});
}

export default Component;
