import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svyq-bb9s.css';
import '../../css/n/nzwe5nggv.css';
import '../../css/u/uow4xdbqo.css';
import '../../css/u/umeb_xfoy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="svyq-bb9s"/><path class="nzwe5nggv"/><path class="uow4xdbqo"/><path class="umeb_xfoy"/></g>`,
		"fallback": "streamline-flex-color:merge-pdf",
	});
}

export default Component;
