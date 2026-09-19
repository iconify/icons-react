import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg4wcxbgt.css';
import '../../css/b/b-ejs9bpn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg4wcxbgt"/><rect class="b-ejs9bpn"/>`,
		"fallback": "garden:lock-unlocked-fill-12",
	});
}

export default Component;
