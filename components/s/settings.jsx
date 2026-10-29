import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl3fapacx.css';
import '../../css/c/cerp886bk.css';
import '../../css/f/fdjy-kuog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k yl3fapacx"/><path class="cerp886bk wm-a"/><path class="fdjy-kuog wm-a"/>`,
		"fallback": "withicons-bauhaus:settings",
	});
}

export default Component;
