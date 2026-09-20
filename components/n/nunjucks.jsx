import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci5el2beh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci5el2beh"/>`,
		"fallback": "material-icon-theme:nunjucks",
	});
}

export default Component;
