import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9m6r4twc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9m6r4twc"/>`,
		"fallback": "tabler:mobiledata-off",
	});
}

export default Component;
