import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfcg3ipgi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfcg3ipgi"/>`,
		"fallback": "icon-park-outline:upload-one",
	});
}

export default Component;
