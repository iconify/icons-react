import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/w/ws_yc2k8c.css';
import '../../css/o/o6az9xqfd.css';
import '../../css/i/icy9jdz7f.css';
import '../../css/s/sbh5_5buf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFFdJMd2U"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="ws_yc2k8c"/><path class="o6az9xqfd"/><path class="icy9jdz7f"/><path class="sbh5_5buf"/></g></mask></defs><path mask="url(#SVGFFdJMd2U)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:layout-five",
	});
}

export default Component;
