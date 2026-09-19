import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/l/llcnvrb_r.css';
import '../../css/l/lu23enbij.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbJmw9dVK"><g class="ylrso7y3c"><path class="llcnvrb_r"/><path class="lu23enbij"/></g></mask></defs><path mask="url(#SVGbJmw9dVK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:speaker",
	});
}

export default Component;
