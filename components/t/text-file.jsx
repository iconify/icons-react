import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/a/ao3vftbrm.css';
import '../../css/o/o15p3n8tr.css';
import '../../css/f/fyqqisbrg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="ao3vftbrm"/><path class="o15p3n8tr"/><path class="fyqqisbrg"/></g>`,
		"fallback": "streamline-kameleon-color:text-file",
	});
}

export default Component;
