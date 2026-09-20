import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h987mzufh.css';
import '../../css/d/dgqdveb1b.css';
import '../../css/b/b9u_jvake.css';

const viewBox = {"width":2159,"height":501};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h987mzufh"/><path class="dgqdveb1b"/><path class="b9u_jvake"/>`,
		"fallback": "thesvg-color:together-ai-dark",
	});
}

export default Component;
