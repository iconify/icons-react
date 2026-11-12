import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loar4lb6y.css';
import '../../css/e/e2xx18l_k.css';
import '../../css/w/wyzkygbfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="loar4lb6y"/><path class="e2xx18l_k"/><path class="wyzkygbfw"/>`,
		"fallback": "selfhst:servarr",
	});
}

export default Component;
