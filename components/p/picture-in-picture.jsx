import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9nmfjvdw.css';
import '../../css/r/r9swm8bzp.css';
import '../../css/y/y4nfpvt4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9nmfjvdw wm-k"/><path class="r9swm8bzp wm-k"/><path class="wm-a y4nfpvt4g"/>`,
		"fallback": "withicons-bauhaus:picture-in-picture",
	});
}

export default Component;
