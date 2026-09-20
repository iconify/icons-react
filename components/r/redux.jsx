import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6dqfo8re.css';

const viewBox = {"width":256,"height":256,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6dqfo8re"/>`,
		"fallback": "thesvg-color:redux",
	});
}

export default Component;
