import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_h18h.css';
import '../../css/t/t7y_kz.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-76.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_h18h"/><path class="t7y_kz"/>`,
		"fallback": "line-md:thumbs-down-twotone",
	});
}

export default Component;
