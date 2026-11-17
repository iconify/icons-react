import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qhx4xob4l.css';
import '../../css/v/vm2vtkjkc.css';
import '../../css/k/k5xu09njj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="qhx4xob4l"/><path class="vm2vtkjkc"/><path class="k5xu09njj"/></g>`,
		"fallback": "matita:list-filter",
	});
}

export default Component;
