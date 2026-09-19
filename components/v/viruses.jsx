import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsz4ihbgo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsz4ihbgo"/>`,
		"fallback": "fa7-solid:viruses",
	});
}

export default Component;
