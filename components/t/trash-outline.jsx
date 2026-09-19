import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gowarsb4c.css';
import '../../css/b/b0c14i84a.css';
import '../../css/f/fyztchb2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gowarsb4c"/><path class="b0c14i84a"/><path class="fyztchb2n"/>`,
		"fallback": "ion:trash-outline",
	});
}

export default Component;
