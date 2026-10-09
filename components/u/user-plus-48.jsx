import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp-_2jb1a.css';
import '../../css/b/b2zcb_1uj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp-_2jb1a"/><path class="b2zcb_1uj"/>`,
		"fallback": "energy-icons:user-plus-48",
	});
}

export default Component;
