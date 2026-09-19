import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-qtipb_t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-qtipb_t"/>`,
		"fallback": "whh:notestasksalt",
	});
}

export default Component;
