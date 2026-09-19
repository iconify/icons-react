import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dvc83c0wf.css';
import '../../css/c/cmb79xb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dvc83c0wf"/><path class="cmb79xb_o"/></g>`,
		"fallback": "iconoir:radius",
	});
}

export default Component;
