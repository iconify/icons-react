import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qtp682b4j.css';
import '../../css/m/m7qhx_ojk.css';
import '../../css/c/cql1pwtbp.css';
import '../../css/g/gnr8u8brg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qtp682b4j"/><path class="m7qhx_ojk"/><circle class="cql1pwtbp"/><path class="gnr8u8brg"/></g>`,
		"fallback": "hugeicons:sleeping",
	});
}

export default Component;
