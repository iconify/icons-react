import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwytb5b0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gwytb5b0p"/>`,
		"fallback": "streamline-plump-color:loading-horizontal-2-flat",
	});
}

export default Component;
