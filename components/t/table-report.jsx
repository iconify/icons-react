import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/ske6nabae.css';
import '../../css/j/ju3i7pbvh.css';
import '../../css/s/sd78_u7bn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWVB6RddW"><g class="ufeehvblu"><path class="ske6nabae"/><path class="ju3i7pbvh"/><path class="sd78_u7bn"/></g></mask></defs><path mask="url(#SVGWVB6RddW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:table-report",
	});
}

export default Component;
