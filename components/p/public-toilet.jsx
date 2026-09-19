import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/t/t7q-hstoq.css';
import '../../css/y/ymiwr7boi.css';
import '../../css/h/hy76pnetd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOIrfybod"><g class="adexpl72i"><circle class="t7q-hstoq"/><circle class="ymiwr7boi"/><path class="hy76pnetd"/></g></mask></defs><path mask="url(#SVGOIrfybod)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:public-toilet",
	});
}

export default Component;
