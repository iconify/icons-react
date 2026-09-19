import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb4s33bah.css';
import '../../css/r/rtki51b4a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb4s33bah"/><path class="rtki51b4a"/>`,
		"fallback": "carbon:vehicle-connected",
	});
}

export default Component;
