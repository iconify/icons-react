import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ona9t_b2c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ona9t_b2c"/>`,
		"fallback": "qlementine-icons:plus-16",
	});
}

export default Component;
