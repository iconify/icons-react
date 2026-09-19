import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob0wpqbjp.css';
import '../../css/h/h_4w4ru8f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob0wpqbjp"/><path class="h_4w4ru8f"/>`,
		"fallback": "carbon:license-global",
	});
}

export default Component;
