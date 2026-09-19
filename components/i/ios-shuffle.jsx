import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7brlpbnx.css';
import '../../css/x/xz4txmb-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7brlpbnx"/><path class="xz4txmb-d"/>`,
		"fallback": "ion:ios-shuffle",
	});
}

export default Component;
