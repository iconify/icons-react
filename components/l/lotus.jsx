import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i86pdjbda.css';
import '../../css/g/gxg8781yl.css';
import '../../css/d/d4bw0pffd.css';
import '../../css/v/vvd7iabnl.css';
import '../../css/x/xslfg2evh.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="i86pdjbda"/><path class="gxg8781yl wm-shine"/><path class="d4bw0pffd wm-k"/><path class="vvd7iabnl wm-a"/><path class="wm-s xslfg2evh"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:lotus",
	});
}

export default Component;
