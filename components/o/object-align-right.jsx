import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab9w6cblr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ab9w6cblr"/>`,
		"fallback": "gravity-ui:object-align-right",
	});
}

export default Component;
