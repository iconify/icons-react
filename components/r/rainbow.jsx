import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m3iym5-2n.css';
import '../../css/j/ja-d7-b4a.css';
import '../../css/y/yykei3bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m3iym5-2n"/><path class="ja-d7-b4a"/><path class="yykei3bja"/></g>`,
		"fallback": "lucide:rainbow",
	});
}

export default Component;
