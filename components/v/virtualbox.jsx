import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow53i4btd.css';
import '../../css/j/jz3gn8btg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow53i4btd"/><path class="jz3gn8btg"/>`,
		"fallback": "selfhst:virtualbox",
	});
}

export default Component;
