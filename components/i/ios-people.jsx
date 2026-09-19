import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drritjblj.css';
import '../../css/w/wk4tu6b9n.css';
import '../../css/d/dkypacb8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drritjblj"/><path class="wk4tu6b9n"/><path class="dkypacb8a"/>`,
		"fallback": "ion:ios-people",
	});
}

export default Component;
