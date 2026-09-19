import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/heaukdbvp.css';
import '../../css/m/mz2cc3bgb.css';
import '../../css/v/vbk2l6bze.css';
import '../../css/h/hdr9guboz.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/j/jho16t1sq.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/q/qyu3b2bin.css';
import '../../css/e/ec2dygbqo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="heaukdbvp"/><path class="mz2cc3bgb"/><path class="vbk2l6bze"/><path class="hdr9guboz"/><path class="ps7z7wb7n"/><path class="jho16t1sq"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="qyu3b2bin"/><path class="ec2dygbqo"/></g>`,
		"fallback": "fluent-emoji-flat:old-man-light",
	});
}

export default Component;
