import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocdgddc2f.css';
import '../../css/w/wk87j1b9c.css';
import '../../css/i/itu3zmsxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ocdgddc2f"/><path clip-rule="evenodd" class="wk87j1b9c"/><path class="itu3zmsxh"/>`,
		"fallback": "basil:map-location-outline",
	});
}

export default Component;
