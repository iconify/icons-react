import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s47ll6kkm.css';
import '../../css/j/j-aqdhbtt.css';
import '../../css/j/jgh0owb4c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s47ll6kkm"/><path class="j-aqdhbtt"/><path class="jgh0owb4c"/>`,
		"fallback": "garden:square-grid-circle-fill-20",
	});
}

export default Component;
