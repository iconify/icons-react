import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g5gmzrgzu.css';
import '../../css/z/zxgvkqbrh.css';
import '../../css/y/y021bzbie.css';
import '../../css/v/v7jzlzbxs.css';
import '../../css/b/bockxgb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="g5gmzrgzu"/><path class="wm-shine zxgvkqbrh"/><path class="wm-k y021bzbie"/><path class="v7jzlzbxs wm-a"/><path class="bockxgb7m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:key-round",
	});
}

export default Component;
