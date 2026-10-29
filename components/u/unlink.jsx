import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyc2c-b2m.css';
import '../../css/h/ht7dbqbbi.css';
import '../../css/c/cijc94bgc.css';
import '../../css/h/hd0vlg_it.css';
import '../../css/k/ky6dy7bbt.css';
import '../../css/k/kitqoe07x.css';
import '../../css/q/qt4v62lyo.css';
import '../../css/r/r-kl53ogr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyc2c-b2m wm-shadow"/><path class="ht7dbqbbi wm-k"/><path class="cijc94bgc wm-k"/><path class="hd0vlg_it wm-k"/><path class="ky6dy7bbt wm-k"/><path class="kitqoe07x wm-k"/><path class="qt4v62lyo wm-s"/><path class="r-kl53ogr wm-s"/>`,
		"fallback": "withicons-pastel:unlink",
	});
}

export default Component;
