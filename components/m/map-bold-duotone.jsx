import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/csrkrnb5y.css';
import '../../css/l/lsxguc_1v.css';
import '../../css/b/bj30ulegm.css';
import '../../css/k/k756bi2wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="csrkrnb5y"/><path class="lsxguc_1v"/></g><path class="bj30ulegm"/><path class="k756bi2wv"/>`,
		"fallback": "solar:map-bold-duotone",
	});
}

export default Component;
