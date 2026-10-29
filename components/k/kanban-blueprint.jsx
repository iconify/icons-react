import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xx73ektwa.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/so7639bqv.css';
import '../../css/j/jer6t-brk.css';
import '../../css/k/kv8oxcbih.css';
import '../../css/t/tclpifbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xx73ektwa"/><path class="cf3uzcrzx wm-deco"/><path class="so7639bqv wm-k"/><rect class="jer6t-brk wm-k"/><rect class="kv8oxcbih wm-a"/><rect class="tclpifbld wm-k"/></g>`,
		"fallback": "withicons:kanban-blueprint",
	});
}

export default Component;
