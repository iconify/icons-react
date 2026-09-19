import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/t/tdlrk5qco.css';
import '../../css/u/urxhupwmb.css';
import '../../css/s/s7-urzb6m.css';
import '../../css/q/qlf_zqcoj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGw4mdSaaC"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="tdlrk5qco"/><path class="urxhupwmb"/><path class="s7-urzb6m"/><path class="qlf_zqcoj"/></g></mask></defs><path mask="url(#SVGw4mdSaaC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:layout-four",
	});
}

export default Component;
