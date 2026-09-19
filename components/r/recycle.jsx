import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07_lgbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p07_lgbpu"/>`,
		"fallback": "griddy-icons:recycle",
	});
}

export default Component;
