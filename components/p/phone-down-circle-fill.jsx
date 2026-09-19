import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz55hfrey.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz55hfrey"/>`,
		"fallback": "f7:phone-down-circle-fill",
	});
}

export default Component;
