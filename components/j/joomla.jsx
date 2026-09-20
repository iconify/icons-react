import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlw4881-w.css';
import '../../css/f/fp5wvo1sn.css';
import '../../css/w/wwbd329qt.css';
import '../../css/h/hii85eizm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlw4881-w"/><path class="fp5wvo1sn"/><path class="wwbd329qt"/><path class="hii85eizm"/>`,
		"fallback": "selfhst:joomla",
	});
}

export default Component;
