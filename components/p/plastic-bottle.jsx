import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2h8hw-en.css';
import '../../css/t/tprn25b3b.css';
import '../../css/u/uqie46eea.css';
import '../../css/j/jn8cixsry.css';
import '../../css/p/p23naccen.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2h8hw-en"/><rect class="tprn25b3b"/><path class="uqie46eea"/><path class="jn8cixsry"/><path class="p23naccen"/>`,
		"fallback": "openmoji:plastic-bottle",
	});
}

export default Component;
