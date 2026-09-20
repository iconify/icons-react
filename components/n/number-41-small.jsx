import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk6l96bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk6l96bdz"/>`,
		"fallback": "tabler:number-41-small",
	});
}

export default Component;
