import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdbhn9wpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mdbhn9wpw"/>`,
		"fallback": "ix:panel-ipc-question",
	});
}

export default Component;
