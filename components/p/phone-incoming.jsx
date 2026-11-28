import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovytc4bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovytc4bcy"/>`,
		"fallback": "noviair-light:phone-incoming",
	});
}

export default Component;
