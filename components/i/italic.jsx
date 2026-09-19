import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfe71db5m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfe71db5m"/>`,
		"fallback": "fa7-solid:italic",
	});
}

export default Component;
