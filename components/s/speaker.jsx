import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udnvig89x.css';
import '../../css/m/mj6sbgtse.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udnvig89x"/><path class="mj6sbgtse"/>`,
		"fallback": "fxemoji:speaker",
	});
}

export default Component;
