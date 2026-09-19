import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkqie5bod.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkqie5bod"/>`,
		"fallback": "icon-park:rectangle-one",
	});
}

export default Component;
