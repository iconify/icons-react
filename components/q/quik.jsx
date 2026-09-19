import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlzckxbnt.css';

const viewBox = {"width":440,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlzckxbnt"/>`,
		"fallback": "ps:quik",
	});
}

export default Component;
