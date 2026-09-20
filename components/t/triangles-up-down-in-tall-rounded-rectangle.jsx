import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqlkubb-y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqlkubb-y"/>`,
		"fallback": "pinhead:triangles-up-down-in-tall-rounded-rectangle",
	});
}

export default Component;
