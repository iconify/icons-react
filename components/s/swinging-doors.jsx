import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6uuk4btr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6uuk4btr"/>`,
		"fallback": "pinhead:swinging-doors",
	});
}

export default Component;
