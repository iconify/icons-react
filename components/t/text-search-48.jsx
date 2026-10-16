import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz7crbc0o.css';
import '../../css/l/lp4l0xmec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz7crbc0o"/><path class="lp4l0xmec"/>`,
		"fallback": "energy-icons:text-search-48",
	});
}

export default Component;
