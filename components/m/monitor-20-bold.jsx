import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq1w_vbdk.css';
import '../../css/m/mmw4hdxlw.css';
import '../../css/c/c_lk71bhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq1w_vbdk"/><path class="mmw4hdxlw"/><path class="c_lk71bhx"/>`,
		"fallback": "energy-icons:monitor-20-bold",
	});
}

export default Component;
