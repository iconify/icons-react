import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zx9s-4b6r.css';
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
		"content": `<g class="hit3bi0-v"><path class="zx9s-4b6r"/><circle class="cplpj-rbo"/><path class="icfu2xbdv"/></g>`,
		"fallback": "icon-park-solid:microphone-one",
	});
}

export default Component;
