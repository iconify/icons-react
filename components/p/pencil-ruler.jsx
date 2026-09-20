import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz6ptgzuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz6ptgzuy"/>`,
		"fallback": "lucide:pencil-ruler",
	});
}

export default Component;
