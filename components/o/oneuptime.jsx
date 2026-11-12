import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdzw-5b-o.css';
import '../../css/c/cargn6b0c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdzw-5b-o"/><path class="cargn6b0c"/>`,
		"fallback": "selfhst:oneuptime",
	});
}

export default Component;
