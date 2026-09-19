import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lxo_d2rud.css';
import '../../css/g/gpho4gepl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="lxo_d2rud"/><path class="gpho4gepl"/></g>`,
		"fallback": "icon-park-solid:umbrella-one",
	});
}

export default Component;
