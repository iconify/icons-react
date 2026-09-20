import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_byzp5sk.css';
import '../../css/g/gj4pehvxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_byzp5sk"/><path clip-rule="evenodd" class="gj4pehvxo"/>`,
		"fallback": "streamline-plump:navigation-arrow-off-solid",
	});
}

export default Component;
