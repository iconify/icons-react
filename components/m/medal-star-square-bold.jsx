import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5xllqbwr.css';
import '../../css/z/zzstyjb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e5xllqbwr"/><path class="zzstyjb9d"/>`,
		"fallback": "solar:medal-star-square-bold",
	});
}

export default Component;
