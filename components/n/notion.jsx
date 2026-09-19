import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cliop5bpn.css';
import '../../css/n/n4tmlp77t.css';
import '../../css/p/pmy0i-b4f.css';
import '../../css/p/p7kcwhk_m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cliop5bpn"/><path class="n4tmlp77t"/><path class="pmy0i-b4f"/><path class="p7kcwhk_m"/>`,
		"fallback": "devicon:notion",
	});
}

export default Component;
