import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idk7jvbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idk7jvbar"/>`,
		"fallback": "coolicons:panel-left-round",
	});
}

export default Component;
