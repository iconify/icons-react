import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/unl5bqbcz.css';
import '../../css/o/oe0gzwqgz.css';
import '../../css/n/n3l509bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="unl5bqbcz"/><path class="oe0gzwqgz"/><path class="n3l509bcp"/></g>`,
		"fallback": "hugeicons:microscope",
	});
}

export default Component;
