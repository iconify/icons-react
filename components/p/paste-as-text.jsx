import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/namfkl8ay.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="namfkl8ay"/>`,
		"fallback": "fluent-mdl2:paste-as-text",
	});
}

export default Component;
