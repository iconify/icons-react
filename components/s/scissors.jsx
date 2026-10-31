import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xgze9ibfr.css';
import '../../css/m/m249w6bfo.css';
import '../../css/t/tu5qhwb4p.css';
import '../../css/b/bqabc6niv.css';
import '../../css/n/nxlx5ur8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="xgze9ibfr"/><path class="m249w6bfo"/><path class="tu5qhwb4p wm-k"/><path class="bqabc6niv wm-a"/><path class="nxlx5ur8l wm-deco"/></g>`,
		"fallback": "withicons-kawaii:scissors",
	});
}

export default Component;
