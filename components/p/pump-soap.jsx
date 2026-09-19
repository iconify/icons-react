import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr-loyqbh.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr-loyqbh"/>`,
		"fallback": "fa6-solid:pump-soap",
	});
}

export default Component;
