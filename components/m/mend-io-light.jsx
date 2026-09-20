import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b808q8dsc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b808q8dsc"/>`,
		"fallback": "selfhst:mend-io-light",
	});
}

export default Component;
