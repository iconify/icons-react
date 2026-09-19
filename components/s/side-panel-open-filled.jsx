import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxchkfu3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxchkfu3s"/>`,
		"fallback": "carbon:side-panel-open-filled",
	});
}

export default Component;
