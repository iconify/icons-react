import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/e/eo3-_3b1e.css';
import '../../css/f/f6z86b9cg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGM9RU2R1h"><g class="ufeehvblu"><path class="eo3-_3b1e"/><path class="f6z86b9cg"/></g></mask></defs><path mask="url(#SVGM9RU2R1h)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:map-road",
	});
}

export default Component;
