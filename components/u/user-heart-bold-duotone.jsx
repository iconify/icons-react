import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmxa02b4w.css';
import '../../css/t/tllmdybix.css';
import '../../css/o/ojkge583k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xmxa02b4w"/><path class="tllmdybix"/><path class="ojkge583k"/>`,
		"fallback": "solar:user-heart-bold-duotone",
	});
}

export default Component;
