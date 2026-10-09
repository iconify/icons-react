import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_z99bhx.css';
import '../../css/l/lg-kv2b6p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_z99bhx"/><path class="lg-kv2b6p"/>`,
		"fallback": "energy-icons:ppa-48",
	});
}

export default Component;
