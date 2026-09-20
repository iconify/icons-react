import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpsiiab0r.css';
import '../../css/l/lnd06abox.css';
import '../../css/w/wolzbf24z.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/i/ijlg5jubn.css';
import '../../css/e/e5ttk6j9m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dpsiiab0r"><path class="lnd06abox"/><path class="wolzbf24z"/></g><g class="x8poo_bjf"><path class="ijlg5jubn"/><path class="e5ttk6j9m"/></g>`,
		"fallback": "openmoji:old-key",
	});
}

export default Component;
