import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bi97eibdl.css';
import '../../css/m/m9k3o5a-y.css';
import '../../css/t/tbfjszvql.css';
import '../../css/u/uirerzbao.css';
import '../../css/f/fiypqkbhz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bi97eibdl"/><rect transform="rotate(45 34.606 4.908)" class="m9k3o5a-y"/><circle class="tbfjszvql"/><circle class="uirerzbao"/><circle class="fiypqkbhz"/></g>`,
		"fallback": "icon-park-outline:modify",
	});
}

export default Component;
