import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcmkq5b4r.css';
import '../../css/f/f1ijkjbnr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcmkq5b4r"/><path class="f1ijkjbnr"/>`,
		"fallback": "carbon:license-maintenance-draft",
	});
}

export default Component;
