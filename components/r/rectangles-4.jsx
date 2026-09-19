import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwiky-9zq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mwiky-9zq"/>`,
		"fallback": "gravity-ui:rectangles-4",
	});
}

export default Component;
