import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oijdhzqia.css';
import '../../css/q/qc7mckb1l.css';
import '../../css/l/l4qyzb11p.css';
import '../../css/a/azud8nr4r.css';
import '../../css/z/z4i3bzo4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oijdhzqia"/><path class="qc7mckb1l"/><path class="l4qyzb11p"/><path class="azud8nr4r"/><path class="z4i3bzo4z"/>`,
		"fallback": "energy-icons:mc4-connector-48-bold",
	});
}

export default Component;
