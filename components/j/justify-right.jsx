import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_v3jdmza.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_v3jdmza"/>`,
		"fallback": "bi:justify-right",
	});
}

export default Component;
