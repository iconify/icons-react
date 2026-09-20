import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozkr_nbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozkr_nbvz"/>`,
		"fallback": "lucide:lamp-floor",
	});
}

export default Component;
