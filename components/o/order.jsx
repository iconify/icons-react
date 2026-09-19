import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/ma89ezbjd.css';
import '../../css/o/o90zhsb-g.css';
import '../../css/y/ybo_y_3hp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBCyq8bMu"><g class="ufeehvblu"><path class="ma89ezbjd"/><path class="o90zhsb-g"/><path class="ybo_y_3hp"/></g></mask></defs><path mask="url(#SVGBCyq8bMu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:order",
	});
}

export default Component;
