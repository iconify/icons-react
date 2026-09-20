import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsl30elre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsl30elre"/>`,
		"fallback": "si:left-up-duotone",
	});
}

export default Component;
