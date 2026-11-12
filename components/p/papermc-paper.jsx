import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n73j_hptb.css';
import '../../css/g/gl-4o7slp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n73j_hptb"/><path class="gl-4o7slp"/>`,
		"fallback": "selfhst:papermc-paper",
	});
}

export default Component;
