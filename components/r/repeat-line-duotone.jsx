import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t1afujhin.css';
import '../../css/s/sec9xqbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t1afujhin"/><path class="sec9xqbsa"/></g>`,
		"fallback": "solar:repeat-line-duotone",
	});
}

export default Component;
