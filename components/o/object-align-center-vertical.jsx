import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjv45ilyv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fjv45ilyv"/>`,
		"fallback": "gravity-ui:object-align-center-vertical",
	});
}

export default Component;
