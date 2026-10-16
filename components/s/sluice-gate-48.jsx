import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmzb4zr4b.css';
import '../../css/l/lbvcveb9f.css';
import '../../css/z/z2zx3vbyw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmzb4zr4b"/><path class="lbvcveb9f"/><path class="z2zx3vbyw"/>`,
		"fallback": "energy-icons:sluice-gate-48",
	});
}

export default Component;
