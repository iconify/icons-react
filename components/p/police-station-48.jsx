import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-t59ibaj.css';
import '../../css/i/i6195bbek.css';
import '../../css/l/l36i_0bet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-t59ibaj"/><path class="i6195bbek"/><path class="l36i_0bet"/>`,
		"fallback": "energy-icons:police-station-48",
	});
}

export default Component;
