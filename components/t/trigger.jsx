import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1fd39d2b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1fd39d2b"/>`,
		"fallback": "material-icon-theme:trigger",
	});
}

export default Component;
