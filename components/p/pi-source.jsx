import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stc4fdcup.css';
import '../../css/h/hwdb9lbix.css';
import '../../css/h/hdfgeqb3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stc4fdcup"/><path class="hwdb9lbix"/><path class="hdfgeqb3t"/>`,
		"fallback": "selfhst:pi-source",
	});
}

export default Component;
