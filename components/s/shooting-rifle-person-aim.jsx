import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/epync8bvp.css';
import '../../css/b/bpisysg8j.css';
import '../../css/n/n02225bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="epync8bvp"/><path class="bpisysg8j"/><path class="n02225bik"/></g>`,
		"fallback": "streamline-ultimate:shooting-rifle-person-aim",
	});
}

export default Component;
