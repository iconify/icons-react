import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq5s2da7d.css';
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
		"content": `<path class="qq5s2da7d"/><path class="ihesg5bsf"/><path class="rfcsgtbnf"/><path class="sxq7-xbtr"/>`,
		"fallback": "ion:ios-lightbulb-outline",
	});
}

export default Component;
