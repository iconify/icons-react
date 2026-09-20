import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj8lr2bdq.css';
import '../../css/c/c6ggvk-4f.css';
import '../../css/m/m2qp7_pyl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj8lr2bdq"/><path class="c6ggvk-4f"/><path class="m2qp7_pyl"/>`,
		"fallback": "teenyicons:layers-solid",
	});
}

export default Component;
