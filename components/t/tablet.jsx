import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbx2-lbrj.css';
import '../../css/s/snmgkdbll.css';
import '../../css/w/w0zsz-bgq.css';
import '../../css/s/sonlh6bds.css';
import '../../css/l/lyk137b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zbx2-lbrj"/><path class="snmgkdbll"/><path class="w0zsz-bgq"/><path class="sonlh6bds"/><path class="lyk137b9s"/></g>`,
		"fallback": "streamline-ultimate-color:tablet",
	});
}

export default Component;
