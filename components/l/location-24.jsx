import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlz_osbhr.css';
import '../../css/r/rwwu0mw7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlz_osbhr"/><path class="rwwu0mw7d"/>`,
		"fallback": "octicon:location-24",
	});
}

export default Component;
