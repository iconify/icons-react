import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ec_xsy4gs.css';
import '../../css/b/bf9hqaclw.css';
import '../../css/a/az8wk3mni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ec_xsy4gs"/><circle class="bf9hqaclw"/><path class="az8wk3mni"/></g>`,
		"fallback": "hugeicons:toy-train",
	});
}

export default Component;
