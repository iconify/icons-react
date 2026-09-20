import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmdqm12tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmdqm12tp"/>`,
		"fallback": "mdi:search-add",
	});
}

export default Component;
