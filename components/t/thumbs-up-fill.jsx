import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy1i_6bbo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dy1i_6bbo"/>`,
		"fallback": "gravity-ui:thumbs-up-fill",
	});
}

export default Component;
