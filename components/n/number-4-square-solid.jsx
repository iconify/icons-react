import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_kod4b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v_kod4b-b"/>`,
		"fallback": "iconoir:number-4-square-solid",
	});
}

export default Component;
