import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9pqesbwr.css';
import '../../css/e/ejsqasb_h.css';
import '../../css/b/bohr7wxep.css';
import '../../css/h/hxbsfkehs.css';

const viewBox = {"width":300,"height":180};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a9pqesbwr"><path class="ejsqasb_h"/><path class="bohr7wxep"/><path class="hxbsfkehs"/></g>`,
		"fallback": "thesvg-color:monkeytype",
	});
}

export default Component;
