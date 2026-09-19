import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpaos2b6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpaos2b6v"/>`,
		"fallback": "icon-park-outline:rectangle-small",
	});
}

export default Component;
