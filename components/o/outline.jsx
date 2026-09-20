import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss_8qxzuj.css';
import '../../css/o/od1iqpboh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss_8qxzuj"/><path class="od1iqpboh"/>`,
		"fallback": "ooui:outline",
	});
}

export default Component;
