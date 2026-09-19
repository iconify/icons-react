import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/gz0mc8htm.css';
import '../../css/t/t1l8wac3t.css';
import '../../css/i/iucmbeysh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6tSu8bXs"><g class="rohhhzb0l"><path class="gz0mc8htm"/><path class="t1l8wac3t"/><path class="iucmbeysh"/></g></mask></defs><path mask="url(#SVG6tSu8bXs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:outgoing",
	});
}

export default Component;
