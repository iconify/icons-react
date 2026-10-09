import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd5s3xe8a.css';
import '../../css/k/kbk8q-9yx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd5s3xe8a"/><path class="kbk8q-9yx"/>`,
		"fallback": "energy-icons:spatula-48",
	});
}

export default Component;
