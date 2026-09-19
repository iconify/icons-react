import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6cki_2wy.css';
import '../../css/x/x2dxx-bdb.css';
import '../../css/z/zeckvdf7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer p6cki_2wy"/><path class="duoicon-primary-layer x2dxx-bdb"/><path class="duoicon-secondary-layer zeckvdf7a"/>`,
		"fallback": "duo-icons:palette",
	});
}

export default Component;
