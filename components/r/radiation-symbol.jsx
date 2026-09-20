import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g39vi6b0f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g39vi6b0f"/>`,
		"fallback": "pinhead:radiation-symbol",
	});
}

export default Component;
