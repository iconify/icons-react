import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gu7252bkg.css';
import '../../css/w/w2bt9_f-g.css';
import '../../css/x/xyyyxpyvq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwGVw3deM"><g class="wwvp95byt"><path class="gu7252bkg"/><path class="w2bt9_f-g"/><path class="xyyyxpyvq"/></g></mask></defs><path mask="url(#SVGwGVw3deM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:movie-board",
	});
}

export default Component;
