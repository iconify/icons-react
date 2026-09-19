import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7daywb0g.css';
import '../../css/m/m8bpqrxix.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7daywb0g"/><path class="m8bpqrxix"/>`,
		"fallback": "ei:user",
	});
}

export default Component;
