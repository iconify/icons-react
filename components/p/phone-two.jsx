import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fux8zqblx.css';
import '../../css/y/y_s78u09s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMSEeubUA"><g class="ft5dv1b6b"><path class="fux8zqblx"/><path class="y_s78u09s"/></g></mask></defs><path mask="url(#SVGMSEeubUA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:phone-two",
	});
}

export default Component;
