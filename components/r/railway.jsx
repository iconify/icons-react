import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nd16xj26h.css';
import '../../css/i/iuw_scb5g.css';
import '../../css/w/wjhnqbcbh.css';
import '../../css/a/a3ez_88ly.css';
import '../../css/y/ylue1qbov.css';
import '../../css/o/o7yn3zb5v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nd16xj26h"/><circle class="iuw_scb5g"/><circle class="wjhnqbcbh"/><path class="a3ez_88ly"/><path class="ylue1qbov"/><path class="o7yn3zb5v"/></g>`,
		"fallback": "icon-park-outline:railway",
	});
}

export default Component;
