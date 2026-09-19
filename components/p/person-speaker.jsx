import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuw55ibmb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nuw55ibmb"/>`,
		"fallback": "gravity-ui:person-speaker",
	});
}

export default Component;
