import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rixak_2_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rixak_2_g"/>`,
		"fallback": "iconoir:phone-outcome-solid",
	});
}

export default Component;
