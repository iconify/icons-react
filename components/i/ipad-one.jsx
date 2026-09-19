import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/la38rpbwm.css';
import '../../css/s/spfz9_bfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="la38rpbwm"/><path class="spfz9_bfy"/></g>`,
		"fallback": "icon-park:ipad-one",
	});
}

export default Component;
