import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dw6xl3bwt.css';
import '../../css/p/pzzg-sbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="dw6xl3bwt"/><path class="pzzg-sbsi"/></g>`,
		"fallback": "lets-icons:notebook",
	});
}

export default Component;
