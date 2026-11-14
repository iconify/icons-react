import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lz_qbtbon.css';
import '../../css/z/z3dgrwb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lz_qbtbon"/><path class="z3dgrwb5m"/></g>`,
		"fallback": "hugeicons:savings",
	});
}

export default Component;
