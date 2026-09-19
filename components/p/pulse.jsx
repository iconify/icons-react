import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyht2ts8y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyht2ts8y"/>`,
		"fallback": "codicon:pulse",
	});
}

export default Component;
