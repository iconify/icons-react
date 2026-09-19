import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwx_n2boy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pwx_n2boy"/>`,
		"fallback": "gravity-ui:link-slash",
	});
}

export default Component;
