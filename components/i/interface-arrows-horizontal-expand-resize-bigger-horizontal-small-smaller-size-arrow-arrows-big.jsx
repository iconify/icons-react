import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heg2zcb5a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heg2zcb5a"/>`,
		"fallback": "streamline:interface-arrows-horizontal-expand-resize-bigger-horizontal-small-smaller-size-arrow-arrows-big",
	});
}

export default Component;
