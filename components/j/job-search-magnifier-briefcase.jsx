import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/epuchabnl.css';
import '../../css/h/h22qwyaft.css';
import '../../css/u/uxo8fdb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="epuchabnl"/><path class="h22qwyaft"/><path class="uxo8fdb3q"/></g>`,
		"fallback": "streamline-freehand-color:job-search-magnifier-briefcase",
	});
}

export default Component;
