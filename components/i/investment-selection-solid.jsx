import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an4eqo_8f.css';
import '../../css/l/lr_186u5e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an4eqo_8f"/><path clip-rule="evenodd" class="lr_186u5e"/>`,
		"fallback": "streamline:investment-selection-solid",
	});
}

export default Component;
