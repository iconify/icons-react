import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/n/ng2u88qjz.css';
import '../../css/p/pfipa5buf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNIXFNeRn"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="ng2u88qjz"/><path class="pfipa5buf"/></g></mask></defs><path mask="url(#SVGNIXFNeRn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:new-picture",
	});
}

export default Component;
