import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0wi0dc7i.css';
import '../../css/p/p2_f0-rsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0wi0dc7i"/><path class="p2_f0-rsw"/>`,
		"fallback": "selfhst:rotten-tomatoes",
	});
}

export default Component;
