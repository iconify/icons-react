import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2i58labe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w2i58labe"/>`,
		"fallback": "gravity-ui:object-align-center-horizontal",
	});
}

export default Component;
