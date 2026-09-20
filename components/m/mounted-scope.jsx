import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqa1w4vfe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqa1w4vfe"/>`,
		"fallback": "pinhead:mounted-scope",
	});
}

export default Component;
