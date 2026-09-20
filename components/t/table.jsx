import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h2-2dgnfu.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/t/t7vb-cbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h2-2dgnfu"/><rect class="jhxi-trnl"/><path class="t7vb-cbsk"/></g>`,
		"fallback": "lucide:table",
	});
}

export default Component;
