import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xflqgqbet.css';
import '../../css/q/qtgs8telk.css';
import '../../css/i/idia1tbxe.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xflqgqbet"/><path class="qtgs8telk"/><path class="idia1tbxe"/>`,
		"fallback": "openmoji:poultry-leg",
	});
}

export default Component;
