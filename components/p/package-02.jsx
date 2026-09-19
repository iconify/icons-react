import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k88fqcc0d.css';
import '../../css/z/zdctrwbkt.css';
import '../../css/g/gs0ndt-8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k88fqcc0d"/><path class="zdctrwbkt"/><path class="gs0ndt-8q"/></g>`,
		"fallback": "hugeicons:package-02",
	});
}

export default Component;
