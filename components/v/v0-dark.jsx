import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnr7_ug-t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hnr7_ug-t"/>`,
		"fallback": "thesvg-color:v0-dark",
	});
}

export default Component;
