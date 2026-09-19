import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/ikvx1nbvt.css';
import '../../css/f/fyrldibwl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpcARxd5a"><g class="wwvp95byt"><path class="ikvx1nbvt"/><path class="fyrldibwl"/></g></mask></defs><path mask="url(#SVGpcARxd5a)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:rs-male",
	});
}

export default Component;
