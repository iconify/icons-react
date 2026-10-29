import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg00i_boh.css';
import '../../css/h/h1a9fqbsg.css';
import '../../css/d/d91l8hv0w.css';
import '../../css/s/slojpgbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg00i_boh wm-k"/><path class="h1a9fqbsg wm-k"/><path class="d91l8hv0w wm-s"/><path class="slojpgbec wm-s"/>`,
		"fallback": "withicons-bauhaus:mail-check",
	});
}

export default Component;
