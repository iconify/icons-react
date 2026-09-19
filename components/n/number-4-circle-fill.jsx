import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-y486bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o-y486bsq"/>`,
		"fallback": "iconamoon:number-4-circle-fill",
	});
}

export default Component;
