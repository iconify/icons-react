import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfecm9-nm.css';
import '../../css/o/ogzvocccz.css';
import '../../css/u/ue203ab6f.css';
import '../../css/s/s28ko4kec.css';
import '../../css/t/t-j_e917h.css';
import '../../css/v/vc0943bvd.css';
import '../../css/y/ymi11lgla.css';
import '../../css/l/l2hq0acuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfecm9-nm"/><path class="ogzvocccz"/><path class="ue203ab6f"/><path class="s28ko4kec"/><path class="t-j_e917h"/><path class="vc0943bvd"/><path class="ymi11lgla"/><path class="l2hq0acuk"/>`,
		"fallback": "mingcute:loading-2-line",
	});
}

export default Component;
