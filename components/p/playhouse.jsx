import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bebc3s2zk.css';
import '../../css/w/whljx5b0r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bebc3s2zk"/><path class="whljx5b0r"/>`,
		"fallback": "temaki:playhouse",
	});
}

export default Component;
