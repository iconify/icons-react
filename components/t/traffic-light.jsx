import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuxol8bac.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zuxol8bac"/>`,
		"fallback": "gravity-ui:traffic-light",
	});
}

export default Component;
