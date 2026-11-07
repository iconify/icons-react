import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kpwkzx3ky.css';
import '../../css/z/zq7_lpb2o.css';
import '../../css/a/asuhr6qyo.css';
import '../../css/z/zfm2k-boo.css';
import '../../css/p/p6ok6mb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="kpwkzx3ky"/><path class="zq7_lpb2o"/></g><path class="asuhr6qyo"/><path class="zfm2k-boo"/><path class="p6ok6mb4q"/>`,
		"fallback": "solar:share-bold-duotone",
	});
}

export default Component;
