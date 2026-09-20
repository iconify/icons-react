import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ig3u9slfk.css';
import '../../css/v/vyj6x83we.css';
import '../../css/o/ofhi9kwqn.css';
import '../../css/h/hwe3wrb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ig3u9slfk"/><path class="vyj6x83we"/><path class="ofhi9kwqn"/><path class="hwe3wrb-a"/></g>`,
		"fallback": "tdesign:setting",
	});
}

export default Component;
