import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/d/d3-tv-x_a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHR81De9f"><g class="wwvp95byt"><rect class="g47cb4b4t"/><path class="d3-tv-x_a"/></g></mask></defs><path mask="url(#SVGHR81De9f)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:up-square",
	});
}

export default Component;
