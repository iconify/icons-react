import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p39nnsqho.css';
import '../../css/h/hdg58-alj.css';
import '../../css/z/zo23epbvc.css';
import '../../css/j/j8fx-qmyj.css';
import '../../css/r/r3q8yeb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p39nnsqho"/><rect class="hdg58-alj"/><path class="zo23epbvc"/><rect class="j8fx-qmyj"/><path class="r3q8yeb5l"/></g>`,
		"fallback": "lucide-lab:pond",
	});
}

export default Component;
