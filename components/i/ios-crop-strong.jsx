import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yigoh0b8f.css';
import '../../css/h/hoth7qk6d.css';
import '../../css/x/xgk3jto0j.css';
import '../../css/l/ld7eseqtz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yigoh0b8f"/><path class="hoth7qk6d"/><path class="xgk3jto0j"/><path class="ld7eseqtz"/>`,
		"fallback": "ion:ios-crop-strong",
	});
}

export default Component;
