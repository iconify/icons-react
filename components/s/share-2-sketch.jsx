import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r8kxqubna.css';
import '../../css/r/r48fovbmg.css';
import '../../css/c/csu1dprkm.css';
import '../../css/v/vzy9orbpl.css';
import '../../css/y/ye1kwvzpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r8kxqubna"/><path class="r48fovbmg wm-k"/><path class="csu1dprkm wm-a"/><path class="vzy9orbpl wm-k"/><path class="wm-a ye1kwvzpw"/></g>`,
		"fallback": "withicons:share-2-sketch",
	});
}

export default Component;
