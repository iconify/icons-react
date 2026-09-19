import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/r/rlycsrbwi.css';
import '../../css/p/p53aqib6l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8lqyRdOf"><g class="wwvp95byt"><path class="rlycsrbwi"/><path class="p53aqib6l"/></g></mask></defs><path mask="url(#SVG8lqyRdOf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:level",
	});
}

export default Component;
