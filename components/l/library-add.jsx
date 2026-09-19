import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtgd7zbyl.css';
import '../../css/w/ws3ki_htx.css';
import '../../css/m/m3p5ncbjq.css';
import '../../css/p/pphcryv5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtgd7zbyl"/><path class="ws3ki_htx"/><path class="m3p5ncbjq"/><path class="pphcryv5p"/>`,
		"fallback": "cil:library-add",
	});
}

export default Component;
