import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5zcv1but.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5zcv1but"/>`,
		"fallback": "icon-park-outline:necktie",
	});
}

export default Component;
