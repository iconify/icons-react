import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/w/ws_yc2k8c.css';
import '../../css/r/ripen2bkw.css';
import '../../css/f/f3_0cobop.css';
import '../../css/m/maeqajb2d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsGcWxeuY"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="ws_yc2k8c"/><path class="ripen2bkw"/><path class="f3_0cobop"/><path class="maeqajb2d"/></g></mask></defs><path mask="url(#SVGsGcWxeuY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:layout-one",
	});
}

export default Component;
