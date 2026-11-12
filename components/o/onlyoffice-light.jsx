import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1-d8oozv.css';
import '../../css/m/mas9rozrn.css';
import '../../css/i/i49k2acdw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1-d8oozv"/><path class="mas9rozrn"/><path class="i49k2acdw"/>`,
		"fallback": "selfhst:onlyoffice-light",
	});
}

export default Component;
