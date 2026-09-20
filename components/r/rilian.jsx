import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgbqp99xv.css';
import '../../css/i/im5jjgb5i.css';
import '../../css/m/mt8lf6r6u.css';
import '../../css/i/iwgtfseba.css';

const viewBox = {"width":16.22,"height":18};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bgbqp99xv"><path class="im5jjgb5i"/><path class="mt8lf6r6u"/><path class="iwgtfseba"/></g>`,
		"fallback": "thesvg-color:rilian",
	});
}

export default Component;
