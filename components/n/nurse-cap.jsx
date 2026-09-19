import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fl8cn3t_e.css';
import '../../css/d/dxabs_voe.css';
import '../../css/l/ljv3ubx8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="fl8cn3t_e"/><path class="dxabs_voe"/><path class="ljv3ubx8d"/></g>`,
		"fallback": "icon-park:nurse-cap",
	});
}

export default Component;
