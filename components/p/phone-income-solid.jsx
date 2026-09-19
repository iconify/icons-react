import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oam0ewdhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oam0ewdhl"/>`,
		"fallback": "iconoir:phone-income-solid",
	});
}

export default Component;
