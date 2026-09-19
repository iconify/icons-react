import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwvz8v-kf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xwvz8v-kf"/>`,
		"fallback": "gravity-ui:triangle-exclamation-fill",
	});
}

export default Component;
