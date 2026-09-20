import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/httstt_8v.css';
import '../../css/o/o-ejz-b0a.css';
import '../../css/q/qpcow5bvc.css';
import '../../css/z/z6blvu--y.css';
import '../../css/x/xvfra1b9t.css';
import '../../css/m/mzytts-on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="httstt_8v"><path class="o-ejz-b0a"/><path class="qpcow5bvc"/><path class="z6blvu--y"/><path class="xvfra1b9t"/></g><path class="mzytts-on"/></g>`,
		"fallback": "solar:playlist-minimalistic-2-bold-duotone",
	});
}

export default Component;
