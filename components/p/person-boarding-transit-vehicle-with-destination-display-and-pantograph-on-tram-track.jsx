import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvfqb6dsg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvfqb6dsg"/>`,
		"fallback": "pinhead:person-boarding-transit-vehicle-with-destination-display-and-pantograph-on-tram-track",
	});
}

export default Component;
