import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5v__0v2h.css';
import '../../css/y/y6k8bq-ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5v__0v2h"/><path class="y6k8bq-ll"/>`,
		"fallback": "stash:user-avatar-duotone",
	});
}

export default Component;
