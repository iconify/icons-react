import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdm3i3bao.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdm3i3bao"/>`,
		"fallback": "fa-solid:people-carry",
	});
}

export default Component;
