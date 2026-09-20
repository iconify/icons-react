import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/maf61obxw.css';
import '../../css/v/vy7iqgbzp.css';
import '../../css/q/qfnil2y-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="maf61obxw"/><path class="vy7iqgbzp"/><path class="qfnil2y-x"/></g>`,
		"fallback": "streamline-freehand:office-photocopy-machine-2",
	});
}

export default Component;
