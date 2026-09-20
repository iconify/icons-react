import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miclccyag.css';
import '../../css/x/x_a_cwb1g.css';
import '../../css/z/zdyze6bia.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miclccyag"/><path clip-rule="evenodd" class="x_a_cwb1g"/><path class="zdyze6bia"/>`,
		"fallback": "teenyicons:robot-solid",
	});
}

export default Component;
