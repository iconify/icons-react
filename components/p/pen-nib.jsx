import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt2o9cczv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt2o9cczv"/>`,
		"fallback": "pixel:pen-nib",
	});
}

export default Component;
