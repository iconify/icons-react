import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxsb6gbnq.css';
import '../../css/k/kz_eqvbal.css';
import '../../css/m/mdy1v-bkk.css';
import '../../css/x/xrkhp3vin.css';
import '../../css/f/f39f54bjb.css';
import '../../css/h/h9bh6x1kd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxsb6gbnq"/><path class="kz_eqvbal"/><path class="mdy1v-bkk"/><path class="xrkhp3vin"/><path class="f39f54bjb"/><path class="h9bh6x1kd"/></g>`,
		"fallback": "fluent-emoji-flat:kissing-cat",
	});
}

export default Component;
