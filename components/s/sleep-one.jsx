import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofrod_8io.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofrod_8io"/>`,
		"fallback": "icon-park-outline:sleep-one",
	});
}

export default Component;
