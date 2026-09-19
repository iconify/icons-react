import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xlafjzblc.css';
import '../../css/l/la4yfnb1x.css';
import '../../css/x/x5yso2bum.css';
import '../../css/f/f7tie9box.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGF7oT1cvi"><g class="wwvp95byt"><path class="xlafjzblc"/><path class="la4yfnb1x"/><path class="x5yso2bum"/><path class="f7tie9box"/></g></mask></defs><path mask="url(#SVGF7oT1cvi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:map-road-two",
	});
}

export default Component;
