import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha1-zac3l.css';
import '../../css/d/d_11-9bwc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha1-zac3l"/><path class="d_11-9bwc"/>`,
		"fallback": "carbon:radio",
	});
}

export default Component;
