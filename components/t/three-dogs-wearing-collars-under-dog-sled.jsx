import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmneqac1s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmneqac1s"/>`,
		"fallback": "pinhead:three-dogs-wearing-collars-under-dog-sled",
	});
}

export default Component;
