import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmpt51hmn.css';
import '../../css/z/zfhxusean.css';
import '../../css/y/y-rk38d9f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmpt51hmn"/><path class="zfhxusean"/><path class="y-rk38d9f"/>`,
		"fallback": "energy-icons:ore-20-bold",
	});
}

export default Component;
