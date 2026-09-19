import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/s5s_qk0sn.css';
import '../../css/c/cplpj-rbo.css';
import '../../css/i/icfu2xbdv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="s5s_qk0sn"/><circle class="cplpj-rbo"/><path class="icfu2xbdv"/></g>`,
		"fallback": "icon-park-outline:microphone-one",
	});
}

export default Component;
