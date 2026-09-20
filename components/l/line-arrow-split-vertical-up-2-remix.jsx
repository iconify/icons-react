import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzoxobb9x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hzoxobb9x"/>`,
		"fallback": "streamline:line-arrow-split-vertical-up-2-remix",
	});
}

export default Component;
