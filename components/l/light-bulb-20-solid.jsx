import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr5ki4baj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr5ki4baj"/>`,
		"fallback": "heroicons:light-bulb-20-solid",
	});
}

export default Component;
