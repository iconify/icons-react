import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bbe_xybxr.css';
import '../../css/k/kizbw6bue.css';
import '../../css/j/jifcohbtm.css';
import '../../css/h/h5utuuptd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bbe_xybxr"/><path class="kizbw6bue wm-a"/><path class="jifcohbtm wm-k"/><path class="h5utuuptd wm-a"/></g>`,
		"fallback": "withicons:rows-sketch",
	});
}

export default Component;
