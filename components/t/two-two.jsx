import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz37df3-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz37df3-i"/>`,
		"fallback": "icon-park-solid:two-two",
	});
}

export default Component;
