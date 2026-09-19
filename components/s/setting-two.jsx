import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/d/dnob__wjw.css';
import '../../css/g/g0sf6ebkt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjtLwKbIn"><g class="ylrso7y3c"><path class="dnob__wjw"/><path class="g0sf6ebkt"/></g></mask></defs><path mask="url(#SVGjtLwKbIn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:setting-two",
	});
}

export default Component;
