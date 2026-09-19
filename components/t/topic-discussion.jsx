import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/v/vw3aex42z.css';
import '../../css/r/rvdel8boi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIWLV7cOc"><g class="gopnm44um"><path class="vw3aex42z"/><path class="rvdel8boi"/></g></mask></defs><path mask="url(#SVGIWLV7cOc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:topic-discussion",
	});
}

export default Component;
