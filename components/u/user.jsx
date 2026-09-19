import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_jmlxnvx.css';
import '../../css/m/mza_fjbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer s_jmlxnvx"/><path class="duoicon-secondary-layer mza_fjbph"/>`,
		"fallback": "duo-icons:user",
	});
}

export default Component;
