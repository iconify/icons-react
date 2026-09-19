import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr4i-mvju.css';
import '../../css/p/pqy87ebie.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr4i-mvju"/><path class="pqy87ebie"/>`,
		"fallback": "fxemoji:raisedhandsfingerssplayed",
	});
}

export default Component;
