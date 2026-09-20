import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw7p2hb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw7p2hb-b"/>`,
		"fallback": "mdi:swiss-cheese",
	});
}

export default Component;
