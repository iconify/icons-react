import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx-wffkco.css';
import '../../css/p/pke3qdk4w.css';
import '../../css/e/e5k93192z.css';
import '../../css/m/m2gu59eht.css';
import '../../css/l/lymjp8oif.css';
import '../../css/z/zj3ztcu_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx-wffkco"/><path class="pke3qdk4w"/><path class="e5k93192z"/><path class="m2gu59eht"/><path class="lymjp8oif"/><path class="zj3ztcu_k"/>`,
		"fallback": "icon-park:oceanengine",
	});
}

export default Component;
