import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a8lk2p1vg.css';
import '../../css/x/x9ozcjbiw.css';
import '../../css/g/gfjheqbit.css';
import '../../css/w/wsynvg5ce.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="a8lk2p1vg"/><path class="wm-shine x9ozcjbiw"/><path class="gfjheqbit wm-k"/><path class="wm-a wsynvg5ce"/><path class="qr4ochb5c wm-s"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:microphone-off",
	});
}

export default Component;
