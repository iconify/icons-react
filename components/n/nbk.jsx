import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcsolabaf.css';
import '../../css/w/w74onkt8p.css';
import '../../css/q/qt9uaibzn.css';

const viewBox = {"width":195,"height":93};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcsolabaf"/><path class="w74onkt8p"/><path class="qt9uaibzn"/>`,
		"fallback": "thesvg-color:nbk",
	});
}

export default Component;
