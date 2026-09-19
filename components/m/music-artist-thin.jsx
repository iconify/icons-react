import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/z2o0ujiuj.css';
import '../../css/i/i18xl820u.css';
import '../../css/n/n2bughbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="z2o0ujiuj"/><circle class="i18xl820u"/><path class="n2bughbkw"/></g>`,
		"fallback": "iconamoon:music-artist-thin",
	});
}

export default Component;
