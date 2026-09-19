import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7agvlggf.css';
import '../../css/j/jkzqgictx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7agvlggf"/><path class="jkzqgictx"/>`,
		"fallback": "devicon-plain:neo4j-wordmark",
	});
}

export default Component;
