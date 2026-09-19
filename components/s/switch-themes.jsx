import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/h/hz0tqwbzn.css';
import '../../css/p/p6samz-as.css';
import '../../css/x/xsn_p8bcm.css';
import '../../css/h/h31e_wbyk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfh0dGbtH"><g class="gopnm44um"><path clip-rule="evenodd" class="hz0tqwbzn"/><path class="p6samz-as"/><path class="xsn_p8bcm"/><path class="h31e_wbyk"/></g></mask></defs><path mask="url(#SVGfh0dGbtH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:switch-themes",
	});
}

export default Component;
