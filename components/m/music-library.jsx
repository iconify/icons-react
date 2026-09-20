import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6fo1hbmi.css';
import '../../css/q/qv-p7ubas.css';
import '../../css/u/u-iqtibkl.css';
import '../../css/l/lsamq19hc.css';
import '../../css/w/wlrlsu9vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v6fo1hbmi"/><path class="qv-p7ubas"/><path class="u-iqtibkl"/><path class="lsamq19hc"/><path class="wlrlsu9vn"/></g>`,
		"fallback": "reicon:music-library",
	});
}

export default Component;
