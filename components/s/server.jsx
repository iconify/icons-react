import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi9a0sbaf.css';
import '../../css/t/tvgk8qbnj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjOJgrbjt"><g class="ft5dv1b6b"><path class="pi9a0sbaf"/><path class="tvgk8qbnj"/></g></mask></defs><path mask="url(#SVGjOJgrbjt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:server",
	});
}

export default Component;
