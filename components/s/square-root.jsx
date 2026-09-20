import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8ah_44wd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8ah_44wd"/>`,
		"fallback": "marketeq:square-root",
	});
}

export default Component;
