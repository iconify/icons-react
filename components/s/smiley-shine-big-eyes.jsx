import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfipvoh5c.css';
import '../../css/p/pmw0v_bmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfipvoh5c"/><path class="pmw0v_bmd"/>`,
		"fallback": "streamline-freehand:smiley-shine-big-eyes",
	});
}

export default Component;
