import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgs7_jqez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lgs7_jqez"/>`,
		"fallback": "streamline-plump:page-setting-solid",
	});
}

export default Component;
