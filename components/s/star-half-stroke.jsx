import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe4_vg-gn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe4_vg-gn"/>`,
		"fallback": "fa7-regular:star-half-stroke",
	});
}

export default Component;
