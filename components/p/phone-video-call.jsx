import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/b/bqhz5iotd.css';
import '../../css/o/otqgkxb6x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqomg1QiN"><g class="ylrso7y3c"><path class="bqhz5iotd"/><path class="otqgkxb6x"/></g></mask></defs><path mask="url(#SVGqomg1QiN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone-video-call",
	});
}

export default Component;
