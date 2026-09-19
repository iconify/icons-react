import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mkd5m1bpg.css';
import '../../css/u/ua_njy6de.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0xMIRcqN"><g class="wwvp95byt"><path class="mkd5m1bpg"/><circle class="ua_njy6de"/></g></mask></defs><path mask="url(#SVG0xMIRcqN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:stamp",
	});
}

export default Component;
