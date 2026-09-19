import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtem9bcpt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gtem9bcpt"/>`,
		"fallback": "gravity-ui:pencil-to-square",
	});
}

export default Component;
