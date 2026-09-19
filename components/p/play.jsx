import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/s/sa0q3_jrq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGu4ff0bvt"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="sa0q3_jrq"/></g></mask></defs><path mask="url(#SVGu4ff0bvt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:play",
	});
}

export default Component;
