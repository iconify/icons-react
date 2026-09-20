import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oliyidb4n.css';
import '../../css/f/fay_xcscw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oliyidb4n"/><circle class="fay_xcscw"/></g>`,
		"fallback": "reicon:wand-sparkle-filled",
	});
}

export default Component;
