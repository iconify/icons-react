import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/whgfoj3ew.css';
import '../../css/b/bmkp9fbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="whgfoj3ew"/><path class="bmkp9fbng"/></g>`,
		"fallback": "reicon:three-d-rotate",
	});
}

export default Component;
