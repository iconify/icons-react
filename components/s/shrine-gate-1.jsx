import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iji_sobkw.css';
import '../../css/v/vm1-nhb2d.css';
import '../../css/j/joz2cdb2z.css';
import '../../css/g/g21e12bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iji_sobkw"/><path class="vm1-nhb2d"/><path class="joz2cdb2z"/><path class="g21e12bby"/></g>`,
		"fallback": "streamline-cyber-color:shrine-gate-1",
	});
}

export default Component;
