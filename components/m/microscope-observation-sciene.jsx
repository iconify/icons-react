import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vysvq5b-f.css';
import '../../css/n/nfgcsiz9x.css';
import '../../css/b/bo-whzmgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="vysvq5b-f"/><path class="nfgcsiz9x"/><path class="bo-whzmgw"/></g>`,
		"fallback": "streamline-plump:microscope-observation-sciene",
	});
}

export default Component;
