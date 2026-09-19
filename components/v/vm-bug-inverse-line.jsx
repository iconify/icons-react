import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqxuhsbiv.css';
import '../../css/n/nt694ol2t.css';
import '../../css/s/sx-8igbvo.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="hqxuhsbiv"/><path class="nt694ol2t"/><path class="sx-8igbvo"/>`,
		"fallback": "clarity:vm-bug-inverse-line",
	});
}

export default Component;
