import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojr5e4ttl.css';
import '../../css/m/mz2arkbde.css';
import '../../css/d/dbh3tgf1j.css';
import '../../css/b/b-wozacim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ojr5e4ttl"/><path class="mz2arkbde"/><path clip-rule="evenodd" class="dbh3tgf1j"/><path clip-rule="evenodd" class="b-wozacim"/></g>`,
		"fallback": "streamline-plump-color:mouse-wireless-1-flat",
	});
}

export default Component;
