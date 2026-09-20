import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u57lmtb4w.css';
import '../../css/g/gprn__pii.css';
import '../../css/d/de8upybhb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u57lmtb4w"/><path class="gprn__pii"/><path class="de8upybhb"/>`,
		"fallback": "selfhst:ticky",
	});
}

export default Component;
