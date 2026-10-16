import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2m65bbab.css';
import '../../css/u/uza837t1m.css';
import '../../css/a/an5pwtbkq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2m65bbab"/><path class="uza837t1m"/><path class="an5pwtbkq"/>`,
		"fallback": "energy-icons:phone-outgoing-20",
	});
}

export default Component;
