import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0knp0bzk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0knp0bzk"/>`,
		"fallback": "pinhead:triangles-up-down-in-tall-rounded-rectangle-outline",
	});
}

export default Component;
