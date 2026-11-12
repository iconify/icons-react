import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deg8ao8ms.css';
import '../../css/p/piysc6sno.css';
import '../../css/c/c3vcymbtp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deg8ao8ms"/><path class="piysc6sno"/><path class="c3vcymbtp"/>`,
		"fallback": "selfhst:ksuite-kpaste-light",
	});
}

export default Component;
