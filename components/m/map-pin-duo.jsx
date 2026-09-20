import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzk6tablr.css';
import '../../css/q/qwebhzb2g.css';
import '../../css/u/u2edhbbvr.css';
import '../../css/a/ajdtcgnqh.css';
import '../../css/i/icnirybws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rzk6tablr"/><path class="qwebhzb2g"/><path class="u2edhbbvr"/><path class="ajdtcgnqh"/><path class="icnirybws"/></g>`,
		"fallback": "streamline-kameleon-color:map-pin-duo",
	});
}

export default Component;
