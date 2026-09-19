import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdgikwjle.css';
import '../../css/c/certo-bxv.css';
import '../../css/j/j8y488bff.css';
import '../../css/w/w9-2og5ix.css';
import '../../css/x/xydsivb4a.css';
import '../../css/h/h2r_jvb2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdgikwjle"/><path class="certo-bxv"/><path class="j8y488bff"/><path class="w9-2og5ix"/><path class="xydsivb4a"/><path class="h2r_jvb2m"/>`,
		"fallback": "fxemoji:sweatsplash",
	});
}

export default Component;
