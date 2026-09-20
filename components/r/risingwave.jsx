import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcbq29yjm.css';
import '../../css/f/fv8cozbbr.css';
import '../../css/s/s3a7m4bzs.css';
import '../../css/q/q2zc2rbgg.css';
import '../../css/s/sfg5djjdz.css';

const viewBox = {"width":418.24,"height":449.27};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcbq29yjm"/><g class="fv8cozbbr"><path class="s3a7m4bzs"/><path class="q2zc2rbgg"/><path class="sfg5djjdz"/></g>`,
		"fallback": "thesvg-color:risingwave",
	});
}

export default Component;
