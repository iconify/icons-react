import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt10hccok.css';
import '../../css/z/z_2v24bxl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yt10hccok"/><path class="z_2v24bxl"/>`,
		"fallback": "cil:walk",
	});
}

export default Component;
