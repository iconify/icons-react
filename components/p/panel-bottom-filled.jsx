import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1apksb6h.css';
import '../../css/e/eozqsqy-x.css';
import '../../css/b/b4n95wz2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 21.25 14.65)" class="v1apksb6h"/><rect transform="rotate(90 21.25 2.73)" class="eozqsqy-x"/><path class="b4n95wz2p"/></g>`,
		"fallback": "andrsrxn:panel-bottom-filled",
	});
}

export default Component;
