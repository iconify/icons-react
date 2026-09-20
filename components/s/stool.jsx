import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp5uv_k8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp5uv_k8i"/>`,
		"fallback": "streamline-plump:stool",
	});
}

export default Component;
