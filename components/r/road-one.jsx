import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/e8x5_pbxr.css';
import '../../css/t/tffebiuna.css';
import '../../css/x/xxdy1esez.css';
import '../../css/b/b04cps37t.css';
import '../../css/s/s1s0qacfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="e8x5_pbxr"/><path class="tffebiuna"/><path class="xxdy1esez"/><path class="b04cps37t"/><path class="s1s0qacfl"/></g>`,
		"fallback": "icon-park:road-one",
	});
}

export default Component;
