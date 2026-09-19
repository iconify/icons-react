import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdw2rotvn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bdw2rotvn"/>`,
		"fallback": "gravity-ui:square-minus",
	});
}

export default Component;
