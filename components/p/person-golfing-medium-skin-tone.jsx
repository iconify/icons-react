import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev16ygbby.css';
import '../../css/f/f--rpx6kf.css';
import '../../css/d/d6u3u-b3a.css';
import '../../css/g/gbioe_b9y.css';
import '../../css/d/ds970m7sb.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/p/pqk-kr63z.css';
import '../../css/o/ofhv1cerr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev16ygbby"/><g class="f--rpx6kf"><circle class="d6u3u-b3a"/><path class="gbioe_b9y"/><path class="ds970m7sb"/></g><g class="x8poo_bjf"><path class="pqk-kr63z"/><circle class="d6u3u-b3a"/><path class="ofhv1cerr"/></g>`,
		"fallback": "openmoji:person-golfing-medium-skin-tone",
	});
}

export default Component;
