import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pkgsfqbib.css';
import '../../css/y/y5rfibc6p.css';
import '../../css/j/jbi5v9bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pkgsfqbib wm-a"/><path class="wm-k y5rfibc6p"/><path class="jbi5v9bue wm-a"/></g>`,
		"fallback": "withicons:rss-sketch",
	});
}

export default Component;
