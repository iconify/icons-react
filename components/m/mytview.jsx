import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maehpb1hl.css';
import '../../css/o/ouy5zcixh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maehpb1hl"/><path class="ouy5zcixh"/>`,
		"fallback": "selfhst:mytview",
	});
}

export default Component;
