import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-93l-57t.css';
import '../../css/c/cgqm05v5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-93l-57t"/><path class="cgqm05v5i"/>`,
		"fallback": "selfhst:reclaimerr-light",
	});
}

export default Component;
