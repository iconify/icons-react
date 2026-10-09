import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1x-ibbak.css';
import '../../css/h/hlue_gbgu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1x-ibbak"/><path class="hlue_gbgu"/>`,
		"fallback": "energy-icons:pellet-boiler-20-bold",
	});
}

export default Component;
