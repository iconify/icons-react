import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai_jqqbou.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai_jqqbou"/>`,
		"fallback": "icon-park:navigation",
	});
}

export default Component;
