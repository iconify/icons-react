import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/gfy0wdb_f.css';
import '../../css/f/f62px9bok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="gfy0wdb_f"/><path class="f62px9bok"/></g>`,
		"fallback": "streamline-plump:one-handed-holding-tablet-handheld",
	});
}

export default Component;
