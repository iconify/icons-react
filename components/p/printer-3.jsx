import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chnkfjcmo.css';
import '../../css/i/i0oh48bvd.css';
import '../../css/z/ztqbc2bvy.css';
import '../../css/q/qwbzpw7eu.css';
import '../../css/z/z67xytbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chnkfjcmo"/><path class="i0oh48bvd"/><path class="ztqbc2bvy"/><path class="qwbzpw7eu"/><path class="z67xytbre"/></g>`,
		"fallback": "streamline-cyber-color:printer-3",
	});
}

export default Component;
