import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md4_kyv7l.css';
import '../../css/o/oa3mdsoup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer md4_kyv7l"/><path class="duoicon-primary-layer oa3mdsoup"/>`,
		"fallback": "duo-icons:message-3",
	});
}

export default Component;
