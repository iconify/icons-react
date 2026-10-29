import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-i491roh.css';
import '../../css/a/amho5bkqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-i491roh wm-k"/><path class="amho5bkqy wm-a"/>`,
		"fallback": "withicons-bauhaus:redo",
	});
}

export default Component;
