import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt-2uw01i.css';
import '../../css/c/clcbemb9z.css';
import '../../css/z/zqkur5bsc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt-2uw01i"/><path class="clcbemb9z"/><path class="zqkur5bsc"/>`,
		"fallback": "selfhst:mkvpriority",
	});
}

export default Component;
