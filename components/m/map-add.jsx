import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x74-3dfpl.css';
import '../../css/i/ioq293cxn.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x74-3dfpl"/><path class="ioq293cxn"/>`,
		"fallback": "gis:map-add",
	});
}

export default Component;
