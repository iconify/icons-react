import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mji2cccso.css';
import '../../css/q/q2jwsje5o.css';
import '../../css/x/x1yme9bxx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mji2cccso"/><path class="q2jwsje5o"/><path class="x1yme9bxx"/>`,
		"fallback": "vaadin:signal",
	});
}

export default Component;
