import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pta22w69a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pta22w69a"/>`,
		"fallback": "gravity-ui:tag",
	});
}

export default Component;
