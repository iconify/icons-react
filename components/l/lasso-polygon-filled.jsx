import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq_tio5rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq_tio5rh"/>`,
		"fallback": "tabler:lasso-polygon-filled",
	});
}

export default Component;
