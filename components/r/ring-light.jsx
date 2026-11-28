import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qw0p5qogt.css';
import '../../css/q/q212p1b1w.css';
import '../../css/r/r05wzkk_i.css';
import '../../css/x/xtvlw3nak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qw0p5qogt"/><path class="q212p1b1w"/><path class="r05wzkk_i"/><path class="xtvlw3nak"/></g>`,
		"fallback": "iconaut:ring-light",
	});
}

export default Component;
