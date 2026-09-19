import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/q/qzux5j50o.css';
import '../../css/d/doz9sd1gv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGarAxqcel"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="qzux5j50o"/><path class="doz9sd1gv"/></g></mask></defs><path mask="url(#SVGarAxqcel)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:layout-three",
	});
}

export default Component;
