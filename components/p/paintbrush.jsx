import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o-pyckg-q.css';
import '../../css/f/f-3_x3hdg.css';
import '../../css/x/xpfvnec9d.css';
import '../../css/p/phawmubhy.css';
import '../../css/k/ko8hvgezf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="o-pyckg-q"/><path class="f-3_x3hdg wm-shine"/><path class="wm-k xpfvnec9d"/><path class="phawmubhy wm-a"/><path class="ko8hvgezf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:paintbrush",
	});
}

export default Component;
