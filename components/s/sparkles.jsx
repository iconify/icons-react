import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xacjcgs0g.css';
import '../../css/b/bqq63mb0i.css';
import '../../css/j/jb1dlyuwt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xacjcgs0g"/><path class="bqq63mb0i"/><path class="jb1dlyuwt"/>`,
		"fallback": "fxemoji:sparkles",
	});
}

export default Component;
