import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/n/nrb3yrbib.css';
import '../../css/d/dhvxuxb5a.css';
import '../../css/v/vbd_kdzhn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="nrb3yrbib"/><path class="dhvxuxb5a"/><path class="vbd_kdzhn"/></g>`,
		"fallback": "streamline-kameleon-color:script-paper",
	});
}

export default Component;
