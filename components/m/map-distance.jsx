import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/z/z5oavtbwc.css';
import '../../css/i/ic94bsbss.css';
import '../../css/s/sw_zfibgl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGN8BMLZAA"><g class="ufeehvblu"><path class="z5oavtbwc"/><path class="ic94bsbss"/><path class="sw_zfibgl"/></g></mask></defs><path mask="url(#SVGN8BMLZAA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:map-distance",
	});
}

export default Component;
