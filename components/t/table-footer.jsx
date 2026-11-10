import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzgclubiw.css';
import '../../css/d/d45rwrb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kzgclubiw"/><path class="d45rwrb7f"/></g>`,
		"fallback": "andrsrxn:table-footer",
	});
}

export default Component;
