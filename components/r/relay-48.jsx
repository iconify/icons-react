import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmp2mfr9i.css';
import '../../css/n/nsiiab0ne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmp2mfr9i"/><path class="nsiiab0ne"/>`,
		"fallback": "energy-icons:relay-48",
	});
}

export default Component;
