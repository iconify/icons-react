import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuymzzlxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nuymzzlxd"/>`,
		"fallback": "griddy-icons:location-pin",
	});
}

export default Component;
