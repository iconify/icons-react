import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sld4zn5wc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sld4zn5wc"/>`,
		"fallback": "pinhead:person-sitting-in-seat-beside-person-sitting-in-seat",
	});
}

export default Component;
