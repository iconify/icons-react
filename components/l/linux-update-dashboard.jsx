import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eisknabqx.css';
import '../../css/h/hawpsccml.css';
import '../../css/x/xg9h40s8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eisknabqx"/><path class="hawpsccml"/><path class="xg9h40s8h"/>`,
		"fallback": "selfhst:linux-update-dashboard",
	});
}

export default Component;
