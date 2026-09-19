import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw82yk4cu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tw82yk4cu"/>`,
		"fallback": "gravity-ui:smartphone",
	});
}

export default Component;
