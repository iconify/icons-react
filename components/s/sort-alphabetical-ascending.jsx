import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txe6li42a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txe6li42a"/>`,
		"fallback": "mdi:sort-alphabetical-ascending",
	});
}

export default Component;
