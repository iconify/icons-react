import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb14xkumu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb14xkumu"/>`,
		"fallback": "fa-solid:subscript",
	});
}

export default Component;
