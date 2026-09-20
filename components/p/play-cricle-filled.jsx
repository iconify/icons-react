import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpejthblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpejthblc"/>`,
		"fallback": "reicon:play-cricle-filled",
	});
}

export default Component;
