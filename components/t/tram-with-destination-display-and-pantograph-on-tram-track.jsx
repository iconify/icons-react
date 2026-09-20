import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlyym_dwh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlyym_dwh"/>`,
		"fallback": "pinhead:tram-with-destination-display-and-pantograph-on-tram-track",
	});
}

export default Component;
