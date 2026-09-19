import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erfmhctcc.css';
import '../../css/b/b-t5aibbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer erfmhctcc"/><path class="b-t5aibbb duoicon-secondary-layer"/>`,
		"fallback": "duo-icons:location",
	});
}

export default Component;
