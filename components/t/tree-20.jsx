import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr2cl1avx.css';
import '../../css/y/y_dpcj0im.css';
import '../../css/e/eb25nslsj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr2cl1avx"/><path class="y_dpcj0im"/><path class="eb25nslsj"/>`,
		"fallback": "energy-icons:tree-20",
	});
}

export default Component;
