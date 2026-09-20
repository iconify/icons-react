import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndwl507qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndwl507qf"/>`,
		"fallback": "thesvg-color:signal",
	});
}

export default Component;
