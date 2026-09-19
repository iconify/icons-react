import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
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
		"content": `<g class="rggfaqb6e"><circle class="m84lw8bft"/><circle class="eq8_rgx0j"/><circle class="fryp0s66n"/></g>`,
		"fallback": "icon-park:viencharts",
	});
}

export default Component;
