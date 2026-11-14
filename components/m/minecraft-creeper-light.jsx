import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3y5qibll.css';
import '../../css/b/bxrcbrb3m.css';
import '../../css/r/r-qi2rbge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3y5qibll"/><path class="bxrcbrb3m"/><path class="r-qi2rbge"/>`,
		"fallback": "selfhst:minecraft-creeper-light",
	});
}

export default Component;
