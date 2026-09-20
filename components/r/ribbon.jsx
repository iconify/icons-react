import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bjaxmebek.css';
import '../../css/s/sieo8jb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bjaxmebek"/><path class="sieo8jb0y"/></g>`,
		"fallback": "proicons:ribbon",
	});
}

export default Component;
