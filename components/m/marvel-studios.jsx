import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz7t2sb4v.css';
import '../../css/w/wuq0f-bje.css';
import '../../css/g/ggkrbvb_m.css';
import '../../css/x/x6st_t78a.css';
import '../../css/o/oq_mbfbxh.css';

const viewBox = {"width":300,"height":67.216};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz7t2sb4v"/><path class="wuq0f-bje"/><path class="ggkrbvb_m"/><path class="x6st_t78a"/><path class="oq_mbfbxh"/>`,
		"fallback": "thesvg-color:marvel-studios",
	});
}

export default Component;
