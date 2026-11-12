import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-8dz6i7r.css';
import '../../css/t/ty41gwbjw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-8dz6i7r"/><path class="ty41gwbjw"/>`,
		"fallback": "selfhst:voidauth-dark",
	});
}

export default Component;
