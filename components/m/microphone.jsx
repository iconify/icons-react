import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcag2xb0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lcag2xb0m"/>`,
		"fallback": "gravity-ui:microphone",
	});
}

export default Component;
