import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvp3tpbju.css';
import '../../css/s/sa794qgvp.css';
import '../../css/z/zxq1r2bws.css';
import '../../css/q/qdr1inb1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvp3tpbju"/><path class="sa794qgvp"/><path class="zxq1r2bws"/><path class="qdr1inb1m"/>`,
		"fallback": "selfhst:labelito-dark",
	});
}

export default Component;
