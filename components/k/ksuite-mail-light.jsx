import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2j0xjy7g.css';
import '../../css/b/bdp2a1_-z.css';
import '../../css/d/d7fm7dbeo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2j0xjy7g"/><path class="bdp2a1_-z"/><path class="d7fm7dbeo"/>`,
		"fallback": "selfhst:ksuite-mail-light",
	});
}

export default Component;
