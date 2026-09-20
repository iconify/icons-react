import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh9whqolo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh9whqolo"/>`,
		"fallback": "pinhead:jp-college",
	});
}

export default Component;
