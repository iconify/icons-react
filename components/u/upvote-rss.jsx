import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsxq07p-s.css';
import '../../css/s/s8mi_dboe.css';
import '../../css/g/gt-pqrb5j.css';
import '../../css/x/xwbx9bsrs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsxq07p-s"/><path class="s8mi_dboe"/><path class="gt-pqrb5j"/><path class="xwbx9bsrs"/>`,
		"fallback": "selfhst:upvote-rss",
	});
}

export default Component;
