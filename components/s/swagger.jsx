import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgo-iub5k.css';
import '../../css/e/e46esu-mc.css';
import '../../css/a/ak8ip-b6y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgo-iub5k"/><path class="e46esu-mc"/><path class="ak8ip-b6y"/>`,
		"fallback": "thesvg-color:swagger",
	});
}

export default Component;
