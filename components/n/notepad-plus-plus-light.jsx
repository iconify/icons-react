import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_q0t1ebv.css';
import '../../css/o/o5xttwudf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_q0t1ebv"/><path class="o5xttwudf"/>`,
		"fallback": "selfhst:notepad-plus-plus-light",
	});
}

export default Component;
