import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fazr8db2r.css';
import '../../css/g/g4blnhq_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fazr8db2r"/><path clip-rule="evenodd" class="g4blnhq_i"/>`,
		"fallback": "streamline-plump:location-pin-3-solid",
	});
}

export default Component;
