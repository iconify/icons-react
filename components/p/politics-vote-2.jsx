import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/zu2bryg9u.css';
import '../../css/e/e04dgqeia.css';
import '../../css/b/b42widjhx.css';
import '../../css/r/rzmr72baa.css';
import '../../css/a/aexfgn-ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="zu2bryg9u"/><path class="e04dgqeia"/><path class="b42widjhx"/><path class="rzmr72baa"/><path class="aexfgn-ni"/></g>`,
		"fallback": "streamline-sharp-color:politics-vote-2",
	});
}

export default Component;
