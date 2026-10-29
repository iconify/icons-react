import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lbs5ivbim.css';
import '../../css/e/epc7e1bdu.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/u/ujyo-nblv.css';
import '../../css/p/peyupf1yq.css';
import '../../css/p/p3dq04btg.css';
import '../../css/e/emiape75x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lbs5ivbim wm-deco"/><path class="epc7e1bdu wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="ujyo-nblv wm-k"/><path class="peyupf1yq wm-a"/><path class="p3dq04btg wm-s"/><path class="emiape75x wm-a"/></g>`,
		"fallback": "withicons:spider-blueprint",
	});
}

export default Component;
