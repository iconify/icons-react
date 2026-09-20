import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7orre6ne.css';
import '../../css/n/nk_c-zevr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7orre6ne"/><path class="nk_c-zevr"/>`,
		"fallback": "stash:times-circle",
	});
}

export default Component;
