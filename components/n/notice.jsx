import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r035rg_3e.css';
import '../../css/f/f3yq4bbos.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r035rg_3e"/><path class="f3yq4bbos"/>`,
		"fallback": "ooui:notice",
	});
}

export default Component;
