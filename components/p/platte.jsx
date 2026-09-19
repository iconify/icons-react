import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/z/ziae3bb2o.css';
import '../../css/v/vy88app5s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGV9fFDcSf"><g class="ylrso7y3c"><path class="ziae3bb2o"/><path class="vy88app5s"/></g></mask></defs><path mask="url(#SVGV9fFDcSf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:platte",
	});
}

export default Component;
