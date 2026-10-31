import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g0qmkibye.css';
import '../../css/i/itj7rzbqn.css';
import '../../css/s/skul-ck5q.css';
import '../../css/u/ut-furcmy.css';
import '../../css/j/j0jq05s6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="g0qmkibye wm-shadow"/><path class="itj7rzbqn wm-shadow"/><path class="skul-ck5q"/><path class="ut-furcmy"/><path class="j0jq05s6q wm-s"/></g>`,
		"fallback": "withicons-brutal:list-x",
	});
}

export default Component;
