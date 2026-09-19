import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lga59ib1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lga59ib1a"/>`,
		"fallback": "ion:md-leaf",
	});
}

export default Component;
