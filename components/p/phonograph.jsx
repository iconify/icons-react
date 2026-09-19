import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2vxtlsou.css';
import '../../css/r/ruk10rxpd.css';
import '../../css/y/ydr3m1shw.css';
import '../../css/j/j8-rwp7zn.css';
import '../../css/l/lci8q9jxp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0dg0ueSS"><g class="ft5dv1b6b"><rect class="y2vxtlsou"/><circle class="ruk10rxpd"/><rect class="ydr3m1shw"/><rect class="j8-rwp7zn"/><path class="lci8q9jxp"/></g></mask></defs><path mask="url(#SVG0dg0ueSS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phonograph",
	});
}

export default Component;
