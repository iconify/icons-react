import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krf8ry-1i.css';
import '../../css/a/ath_e_b-t.css';
import '../../css/g/gikp8uczy.css';
import '../../css/d/dbbzvkbuh.css';
import '../../css/q/qf57gfbln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krf8ry-1i"/><path class="ath_e_b-t"/><path class="gikp8uczy"/><path class="dbbzvkbuh"/><path class="qf57gfbln"/>`,
		"fallback": "energy-icons:moped-20",
	});
}

export default Component;
