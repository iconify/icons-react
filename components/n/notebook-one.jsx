import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/r/r2i0scb_x.css';
import '../../css/o/oymgzybxy.css';
import '../../css/l/l5ay6cc6w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvIAeWcvK"><g class="ufeehvblu"><path class="r2i0scb_x"/><path class="oymgzybxy"/><path class="l5ay6cc6w"/></g></mask></defs><path mask="url(#SVGvIAeWcvK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:notebook-one",
	});
}

export default Component;
