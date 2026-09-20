import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/u/uhlhzujjg.css';
import '../../css/p/pkwdlrb9z.css';
import '../../css/g/gyi273b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="uhlhzujjg"/><path class="pkwdlrb9z"/><path class="gyi273b3s"/></g>`,
		"fallback": "lets-icons:save",
	});
}

export default Component;
