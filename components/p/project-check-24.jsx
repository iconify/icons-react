import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt6oj8b5t.css';
import '../../css/z/zdpv8zbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt6oj8b5t"/><path class="zdpv8zbdp"/>`,
		"fallback": "octicon:project-check-24",
	});
}

export default Component;
