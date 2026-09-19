import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h-3fmj80g.css';
import '../../css/p/pf56890je.css';
import '../../css/o/old3i1bqh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMtj3lcpQ"><g class="v3_i3wktz"><path clip-rule="evenodd" class="h-3fmj80g"/><path class="pf56890je"/><path class="old3i1bqh"/></g></mask></defs><path mask="url(#SVGMtj3lcpQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:toxins",
	});
}

export default Component;
