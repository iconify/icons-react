import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0_gp6ebt.css';
import '../../css/e/ev0kbl_bk.css';
import '../../css/n/njg9n7b3j.css';
import '../../css/t/turwf4bpk.css';
import '../../css/u/um-r30qfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a x0_gp6ebt"/><path class="ev0kbl_bk wm-k"/><path class="njg9n7b3j wm-a"/><path class="turwf4bpk wm-a"/><path class="um-r30qfi wm-a"/>`,
		"fallback": "withicons-bauhaus:router",
	});
}

export default Component;
