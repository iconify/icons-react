import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3livcc1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3livcc1g"/>`,
		"fallback": "cbi:sega",
	});
}

export default Component;
