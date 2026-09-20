import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdg_z8g7j.css';
import '../../css/m/m3bb8qa6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdg_z8g7j"/><path class="m3bb8qa6g"/>`,
		"fallback": "mage:notion",
	});
}

export default Component;
