import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/okbmw2brh.css';
import '../../css/c/c2pqo7bzq.css';
import '../../css/x/xm3lh5gcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="okbmw2brh"/><circle class="c2pqo7bzq"/><path class="xm3lh5gcf"/></g>`,
		"fallback": "hugeicons:user-group-02",
	});
}

export default Component;
