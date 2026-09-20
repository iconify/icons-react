import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk7wtbc2i.css';
import '../../css/t/tqqkmcc0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk7wtbc2i"/><path class="tqqkmcc0y"/>`,
		"fallback": "selfhst:tinfoil",
	});
}

export default Component;
