import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/e/e4yzy_fnx.css';
import '../../css/t/tp1suz_1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="e4yzy_fnx"/><path class="tp1suz_1w"/></g>`,
		"fallback": "streamline-cyber:play-button",
	});
}

export default Component;
