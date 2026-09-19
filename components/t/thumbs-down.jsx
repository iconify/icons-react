import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo89bj-np.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo89bj-np"/>`,
		"fallback": "fa-regular:thumbs-down",
	});
}

export default Component;
