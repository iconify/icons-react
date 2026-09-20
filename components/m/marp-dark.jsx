import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4nz665xn.css';
import '../../css/b/b6dmwqarl.css';
import '../../css/b/bwdyegfbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4nz665xn"/><path class="b6dmwqarl"/><path class="bwdyegfbl"/>`,
		"fallback": "selfhst:marp-dark",
	});
}

export default Component;
