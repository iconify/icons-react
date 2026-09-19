import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juewm1baf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="juewm1baf"/>`,
		"fallback": "gravity-ui:magnifier",
	});
}

export default Component;
