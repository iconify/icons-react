import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zei5wdc1c.css';
import '../../css/g/g1srbn95n.css';
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
		"content": `<g class="dkv48acbf"><path class="zei5wdc1c"/><path class="g1srbn95n wm-k"/><path class="qr4ochb5c wm-s"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:star-off",
	});
}

export default Component;
