import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpletlpsy.css';
import '../../css/t/teyp2chse.css';
import '../../css/e/e29_vw92i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpletlpsy"/><path class="teyp2chse"/><path class="e29_vw92i"/>`,
		"fallback": "formkit:tether",
	});
}

export default Component;
