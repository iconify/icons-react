import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szpc0wfzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="szpc0wfzc"/>`,
		"fallback": "sidekickicons:sidebar-right-solid",
	});
}

export default Component;
