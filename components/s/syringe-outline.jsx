import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5lolebbd.css';
import '../../css/x/xtcmkpb9n.css';
import '../../css/r/rzr-rcx2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5lolebbd"/><path clip-rule="evenodd" class="xtcmkpb9n"/><path clip-rule="evenodd" class="rzr-rcx2g"/>`,
		"fallback": "cuida:syringe-outline",
	});
}

export default Component;
