import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea5qyqbox.css';
import '../../css/d/dt2gkbchm.css';
import '../../css/v/vhwau7bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea5qyqbox wm-a"/><path class="dt2gkbchm wm-k"/><path class="vhwau7bwl wm-k"/>`,
		"fallback": "withicons-bauhaus:route",
	});
}

export default Component;
