import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/ctq6evbba.css';
import '../../css/l/lh_zh7biy.css';
import '../../css/f/fri595bxy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGl0YEsefU"><g class="ufeehvblu"><path class="ctq6evbba"/><path class="lh_zh7biy"/><path class="fri595bxy"/></g></mask></defs><path mask="url(#SVGl0YEsefU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:mail",
	});
}

export default Component;
