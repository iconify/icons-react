import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/q/q_v_867tk.css';
import '../../css/t/t93ufpleg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="q_v_867tk"/><path class="t93ufpleg"/>`,
		"fallback": "energy-icons:smart-thermostat-48",
	});
}

export default Component;
