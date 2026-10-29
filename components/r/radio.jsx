import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6g5v731f.css';
import '../../css/w/wdu67f6zs.css';
import '../../css/j/j829ogbst.css';
import '../../css/y/y47cdmcvq.css';
import '../../css/b/bbjw-ccll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6g5v731f wm-a"/><path class="wdu67f6zs wm-k"/><path class="j829ogbst wm-a"/><path class="wm-a y47cdmcvq"/><path class="bbjw-ccll wm-a"/>`,
		"fallback": "withicons-bauhaus:radio",
	});
}

export default Component;
