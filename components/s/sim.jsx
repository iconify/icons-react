import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0f2lhr2t.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0f2lhr2t"/>`,
		"fallback": "whh:sim",
	});
}

export default Component;
