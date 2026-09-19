import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-sealbsy.css';
import '../../css/i/ihesg5bsf.css';
import '../../css/r/rfcsgtbnf.css';
import '../../css/s/sxq7-xbtr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-sealbsy"/><path class="ihesg5bsf"/><path class="rfcsgtbnf"/><path class="sxq7-xbtr"/>`,
		"fallback": "ion:ios-lightbulb",
	});
}

export default Component;
