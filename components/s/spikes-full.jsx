import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr__c4rcn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr__c4rcn"/>`,
		"fallback": "game-icons:spikes-full",
	});
}

export default Component;
