import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzpxjubga.css';
import '../../css/s/spkq63dqy.css';
import '../../css/o/otpncmb0s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kzpxjubga"/><path class="spkq63dqy"/><path class="otpncmb0s"/></g>`,
		"fallback": "fluent-emoji-flat:scroll",
	});
}

export default Component;
