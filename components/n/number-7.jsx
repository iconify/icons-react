import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mou448bfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mou448bfo"/>`,
		"fallback": "griddy-icons:number-7",
	});
}

export default Component;
