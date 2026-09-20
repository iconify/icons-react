import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s73-gj2tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s73-gj2tt"/>`,
		"fallback": "mdi:unfold-less-horizontal",
	});
}

export default Component;
