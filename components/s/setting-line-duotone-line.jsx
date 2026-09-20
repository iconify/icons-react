import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uig_arbat.css';
import '../../css/p/p-744obuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uig_arbat"/><path class="p-744obuk"/>`,
		"fallback": "lets-icons:setting-line-duotone-line",
	});
}

export default Component;
