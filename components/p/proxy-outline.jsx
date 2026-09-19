import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/nqdrw-bsa.css';
import '../../css/b/b4ozpub3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="nqdrw-bsa"/><path class="b4ozpub3f"/></g>`,
		"fallback": "bitcoin-icons:proxy-outline",
	});
}

export default Component;
