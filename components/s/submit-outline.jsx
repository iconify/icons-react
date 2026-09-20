import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g45lxybwc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g45lxybwc"/>`,
		"fallback": "lsicon:submit-outline",
	});
}

export default Component;
