import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8g0h1ijq.css';
import '../../css/p/p1q-3bbhj.css';
import '../../css/q/q51og98ej.css';
import '../../css/t/tze0h7nir.css';
import '../../css/k/kqbu62bxe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8g0h1ijq"/><path class="p1q-3bbhj"/><path class="q51og98ej"/><path class="tze0h7nir"/><path class="kqbu62bxe"/>`,
		"fallback": "selfhst:microsoft-access-light",
	});
}

export default Component;
