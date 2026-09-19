import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/f/f5758gbbz.css';
import '../../css/u/uowmflbel.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSes5ne2H"><g class="ufeehvblu"><path class="f5758gbbz"/><path class="uowmflbel"/></g></mask></defs><path mask="url(#SVGSes5ne2H)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:preview-open",
	});
}

export default Component;
