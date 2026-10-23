import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m03hlybwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m03hlybwb"/>`,
		"fallback": "vadivam:pickaxe",
	});
}

export default Component;
