import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy19acbhk.css';
import '../../css/n/n2g2n08zl.css';
import '../../css/x/xpdcvugmc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gy19acbhk"/><path class="n2g2n08zl"/><path class="xpdcvugmc"/></g>`,
		"fallback": "streamline-color:payment-10",
	});
}

export default Component;
