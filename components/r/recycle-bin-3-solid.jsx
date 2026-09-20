import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss9oz9b7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ss9oz9b7f"/>`,
		"fallback": "streamline-plump:recycle-bin-3-solid",
	});
}

export default Component;
