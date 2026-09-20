import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyhkp7bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyhkp7bxz"/>`,
		"fallback": "tabler:number-96-small",
	});
}

export default Component;
