import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/e/ej_-f0c3i.css';
import '../../css/c/cn2o6vbhk.css';
import '../../css/q/qooi5yfzo.css';
import '../../css/m/mftarekup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="ej_-f0c3i"/><path class="cn2o6vbhk"/><path class="qooi5yfzo"/><path class="mftarekup"/></g>`,
		"fallback": "streamline-cyber:paint-palette",
	});
}

export default Component;
