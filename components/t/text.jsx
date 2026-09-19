import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/u/uchybdbwi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGe2TtQeZk"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="uchybdbwi"/></g></mask></defs><path mask="url(#SVGe2TtQeZk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:text",
	});
}

export default Component;
