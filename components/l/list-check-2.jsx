import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui60a30tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui60a30tv"/>`,
		"fallback": "ri:list-check-2",
	});
}

export default Component;
