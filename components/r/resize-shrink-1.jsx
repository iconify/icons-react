import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beb8anbww.css';
import '../../css/j/jd-oqlcip.css';
import '../../css/g/g9-1kgbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beb8anbww"/><path class="jd-oqlcip"/><path class="g9-1kgbkv"/>`,
		"fallback": "streamline-freehand:resize-shrink-1",
	});
}

export default Component;
