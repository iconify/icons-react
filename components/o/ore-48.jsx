import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtxtpbb-v.css';
import '../../css/w/wrzlzeb2x.css';
import '../../css/j/j3iwccb5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtxtpbb-v"/><path class="wrzlzeb2x"/><path class="j3iwccb5d"/>`,
		"fallback": "energy-icons:ore-48",
	});
}

export default Component;
