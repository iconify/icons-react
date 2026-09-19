import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5hamfbrz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y5hamfbrz"/>`,
		"fallback": "gravity-ui:logo-gitlab",
	});
}

export default Component;
