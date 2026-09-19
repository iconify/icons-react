import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryxl_tbum.css';
import '../../css/x/xka5jqons.css';
import '../../css/x/x7iitf4_b.css';
import '../../css/o/o8wlliifz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryxl_tbum"/><path class="xka5jqons"/><path class="x7iitf4_b"/><path class="o8wlliifz"/>`,
		"fallback": "devicon:qwik-wordmark",
	});
}

export default Component;
