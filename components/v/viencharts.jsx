import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/m84lw8bft.css';
import '../../css/e/eq8_rgx0j.css';
import '../../css/f/fryp0s66n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="m84lw8bft"/><circle class="eq8_rgx0j"/><circle class="fryp0s66n"/></g>`,
		"fallback": "icon-park-outline:viencharts",
	});
}

export default Component;
