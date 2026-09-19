import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyelrf6uc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xyelrf6uc"/>`,
		"fallback": "healthicons:medical-records",
	});
}

export default Component;
