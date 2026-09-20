import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb2gx18ss.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb2gx18ss"/>`,
		"fallback": "pinhead:person-wearing-backpack-walking-with-hiking-pole",
	});
}

export default Component;
