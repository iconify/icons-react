import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eulpr3bjr.css';
import '../../css/r/rw8aspbhl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eulpr3bjr"/><path class="rw8aspbhl"/>`,
		"fallback": "thesvg-color:optionos",
	});
}

export default Component;
