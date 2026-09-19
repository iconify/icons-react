import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/i/i40tr9byn.css';
import '../../css/n/n236c5tao.css';
import '../../css/g/goy6owbsv.css';
import '../../css/g/g8rb58bfp.css';
import '../../css/l/lhui643ek.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="i40tr9byn"/><path class="n236c5tao"/><path class="goy6owbsv"/><path class="g8rb58bfp"/><path class="lhui643ek"/></g>`,
		"fallback": "icon-park:map-distance",
	});
}

export default Component;
