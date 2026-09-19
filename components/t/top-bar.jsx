import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/w/ws_yc2k8c.css';
import '../../css/o/o6az9xqfd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbHLeJdew"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="ws_yc2k8c"/><path class="o6az9xqfd"/></g></mask></defs><path mask="url(#SVGbHLeJdew)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:top-bar",
	});
}

export default Component;
