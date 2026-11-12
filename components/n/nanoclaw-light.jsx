import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvhcjuz2f.css';
import '../../css/y/ydehlhbbh.css';
import '../../css/c/ck0nwgb2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvhcjuz2f"/><path class="ydehlhbbh"/><path class="ck0nwgb2f"/>`,
		"fallback": "selfhst:nanoclaw-light",
	});
}

export default Component;
