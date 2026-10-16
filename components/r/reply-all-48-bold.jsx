import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6pg-hzok.css';
import '../../css/i/i8cbj5bwx.css';
import '../../css/o/o-urmp0yo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6pg-hzok"/><path class="i8cbj5bwx"/><path class="o-urmp0yo"/>`,
		"fallback": "energy-icons:reply-all-48-bold",
	});
}

export default Component;
