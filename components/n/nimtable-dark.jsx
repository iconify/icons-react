import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdyn042hz.css';
import '../../css/l/ldgegdkhl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdyn042hz"/><path class="ldgegdkhl"/>`,
		"fallback": "selfhst:nimtable-dark",
	});
}

export default Component;
