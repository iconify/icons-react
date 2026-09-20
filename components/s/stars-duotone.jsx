import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj-d1dbcu.css';
import '../../css/i/iasza6mmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj-d1dbcu"/><path class="iasza6mmh"/>`,
		"fallback": "stash:stars-duotone",
	});
}

export default Component;
