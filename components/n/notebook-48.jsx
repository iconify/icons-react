import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfgr-6b4b.css';
import '../../css/q/q93ngmbes.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfgr-6b4b"/><path class="q93ngmbes"/>`,
		"fallback": "energy-icons:notebook-48",
	});
}

export default Component;
