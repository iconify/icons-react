import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9hnrnnmu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9hnrnnmu"/>`,
		"fallback": "pinhead:propane-tank-with-gas-flame",
	});
}

export default Component;
