import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kspzgnbsg.css';
import '../../css/u/u_nsrq4io.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXE6zpcEE"><g class="ufeehvblu"><rect class="kspzgnbsg"/><path class="u_nsrq4io"/></g></mask></defs><path mask="url(#SVGXE6zpcEE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:terminal",
	});
}

export default Component;
