import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsln68ywm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nsln68ywm"/>`,
		"fallback": "gravity-ui:list-check-lock",
	});
}

export default Component;
