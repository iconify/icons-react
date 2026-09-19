import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl57kjbjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl57kjbjq"/>`,
		"fallback": "fa6-solid:table-list",
	});
}

export default Component;
