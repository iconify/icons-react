import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu1k7ld7a.css';
import '../../css/n/n41378bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu1k7ld7a"/><path clip-rule="evenodd" class="n41378bui"/>`,
		"fallback": "stash:pin-thumbtack-duotone",
	});
}

export default Component;
