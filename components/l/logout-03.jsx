import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aua0m5btf.css';
import '../../css/p/pgvj83jcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aua0m5btf"/><path class="pgvj83jcj"/></g>`,
		"fallback": "hugeicons:logout-03",
	});
}

export default Component;
