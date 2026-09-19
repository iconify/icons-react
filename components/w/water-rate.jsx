import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/yjb0_8b7z.css';
import '../../css/z/zu_quob4e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCK9oCgcW"><g class="ufeehvblu"><path class="yjb0_8b7z"/><path class="zu_quob4e"/></g></mask></defs><path mask="url(#SVGCK9oCgcW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:water-rate",
	});
}

export default Component;
