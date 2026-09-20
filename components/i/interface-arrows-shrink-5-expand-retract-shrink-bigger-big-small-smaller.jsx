import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4yh4hbcx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4yh4hbcx"/>`,
		"fallback": "streamline:interface-arrows-shrink-5-expand-retract-shrink-bigger-big-small-smaller",
	});
}

export default Component;
