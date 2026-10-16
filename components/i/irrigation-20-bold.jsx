import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0224gbwy.css';
import '../../css/h/hhzmyilpp.css';
import '../../css/f/f1gaszbxb.css';
import '../../css/r/r6-fkkb5b.css';
import '../../css/u/u48d4qbdp.css';
import '../../css/s/sg_vl2a-h.css';
import '../../css/s/sz23mw9ns.css';
import '../../css/a/az-owfb0t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0224gbwy"/><path class="hhzmyilpp"/><path class="f1gaszbxb"/><path class="r6-fkkb5b"/><path class="u48d4qbdp"/><path class="sg_vl2a-h"/><path class="sz23mw9ns"/><path class="az-owfb0t"/>`,
		"fallback": "energy-icons:irrigation-20-bold",
	});
}

export default Component;
