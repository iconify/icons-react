import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoskosbxd.css';
import '../../css/p/puyvfbckp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoskosbxd b"/><path class="b puyvfbckp"/>`,
		"fallback": "boxicons:scale",
	});
}

export default Component;
