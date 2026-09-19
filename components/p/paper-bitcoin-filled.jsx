import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9-ahhtng.css';
import '../../css/j/jrhlkt36v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9-ahhtng"/><path clip-rule="evenodd" class="jrhlkt36v"/>`,
		"fallback": "bitcoin-icons:paper-bitcoin-filled",
	});
}

export default Component;
