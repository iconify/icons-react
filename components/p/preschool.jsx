import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/a/a-cxze6vh.css';
import '../../css/p/pd5bu6ihm.css';
import '../../css/k/k1ag-cgsk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3gF00bft"><g class="hv130ab-t"><path class="a-cxze6vh"/><path class="pd5bu6ihm"/><path class="k1ag-cgsk"/></g></mask></defs><path mask="url(#SVG3gF00bft)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:preschool",
	});
}

export default Component;
