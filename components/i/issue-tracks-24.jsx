import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7issnsim.css';
import '../../css/p/ptak6-b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7issnsim"/><path class="ptak6-b-c"/>`,
		"fallback": "octicon:issue-tracks-24",
	});
}

export default Component;
