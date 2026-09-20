import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kko2rac_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kko2rac_a"/>`,
		"fallback": "thesvg-color:max",
	});
}

export default Component;
