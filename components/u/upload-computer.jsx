import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eud7tjtke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eud7tjtke"/>`,
		"fallback": "icon-park-outline:upload-computer",
	});
}

export default Component;
