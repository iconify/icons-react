import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v21nwevjm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v21nwevjm"/>`,
		"fallback": "gravity-ui:sliders",
	});
}

export default Component;
