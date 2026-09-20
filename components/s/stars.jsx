import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/idk6blnlg.css';
import '../../css/q/qtxsezbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="idk6blnlg"/><circle class="qtxsezbbm"/></g>`,
		"fallback": "lucide:stars",
	});
}

export default Component;
