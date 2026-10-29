import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r70as0kbg.css';
import '../../css/x/xgs8ztb6h.css';
import '../../css/u/uru7yvq_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r70as0kbg wm-k"/><path class="wm-a xgs8ztb6h"/><path class="uru7yvq_c wm-a"/>`,
		"fallback": "withicons-bauhaus:italic",
	});
}

export default Component;
