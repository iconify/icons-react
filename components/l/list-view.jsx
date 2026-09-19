import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a8_tgdb2a.css';
import '../../css/s/s7q79h02l.css';
import '../../css/s/s2k0lf03z.css';
import '../../css/o/oxmzpjbgd.css';
import '../../css/t/tf7yavb4y.css';
import '../../css/l/lxsa1dbte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="a8_tgdb2a"/><path class="s7q79h02l"/><path class="s2k0lf03z"/><path class="oxmzpjbgd"/><path class="tf7yavb4y"/><path class="lxsa1dbte"/></g>`,
		"fallback": "icon-park:list-view",
	});
}

export default Component;
