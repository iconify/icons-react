import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa7jezu9i.css';
import '../../css/h/hn7rx0huz.css';
import '../../css/r/ru_93bcxy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa7jezu9i"/><path class="hn7rx0huz"/><path class="ru_93bcxy"/>`,
		"fallback": "fxemoji:squaredvs",
	});
}

export default Component;
