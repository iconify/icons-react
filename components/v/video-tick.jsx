import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fhbxesj3q.css';
import '../../css/w/w-39bzb9s.css';
import '../../css/u/u9g64_r-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fhbxesj3q"/><path class="w-39bzb9s"/><path class="u9g64_r-g"/></g>`,
		"fallback": "reicon:video-tick",
	});
}

export default Component;
