import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbmg-z4wt.css';

const viewBox = {"width":33,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbmg-z4wt"/>`,
		"fallback": "fontisto:night-alt-cloudy",
	});
}

export default Component;
