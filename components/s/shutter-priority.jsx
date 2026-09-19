import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/x44bfmbwq.css';
import '../../css/o/ohqv07ktw.css';
import '../../css/a/axc34h-ro.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFeMiPcSA"><g class="ufeehvblu"><path class="x44bfmbwq"/><path class="ohqv07ktw"/><path class="axc34h-ro"/></g></mask></defs><path mask="url(#SVGFeMiPcSA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:shutter-priority",
	});
}

export default Component;
