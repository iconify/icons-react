import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngsvkrhta.css';
import '../../css/d/dscex6b8j.css';
import '../../css/s/sb5-4ppir.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngsvkrhta"/><path class="dscex6b8j"/><path class="sb5-4ppir"/>`,
		"fallback": "energy-icons:scaffolding-48-bold",
	});
}

export default Component;
