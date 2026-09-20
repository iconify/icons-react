import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdf8mjbji.css';

const viewBox = {"width":214,"height":308};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdf8mjbji"/>`,
		"fallback": "thesvg-color:siket",
	});
}

export default Component;
