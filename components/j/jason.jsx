import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjpv09b3m.css';

const viewBox = {"width":832,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjpv09b3m"/>`,
		"fallback": "whh:jason",
	});
}

export default Component;
