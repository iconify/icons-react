import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr7ghh79r.css';
import '../../css/x/xu9naxyob.css';
import '../../css/j/j9p3709ef.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr7ghh79r"/><path class="xu9naxyob"/><path class="j9p3709ef"/>`,
		"fallback": "carbon:voice-activate",
	});
}

export default Component;
