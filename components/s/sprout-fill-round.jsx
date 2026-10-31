import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvl4myhbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvl4myhbs"/>`,
		"fallback": "coolicons:sprout-fill-round",
	});
}

export default Component;
