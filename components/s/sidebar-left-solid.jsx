import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9vgl2lhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9vgl2lhp"/>`,
		"fallback": "sidekickicons:sidebar-left-solid",
	});
}

export default Component;
