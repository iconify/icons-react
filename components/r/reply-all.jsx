import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxkoc6b9e.css';
import '../../css/o/o23x06b7q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxkoc6b9e"/><path class="o23x06b7q"/>`,
		"fallback": "carbon:reply-all",
	});
}

export default Component;
