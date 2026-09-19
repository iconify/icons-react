import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/no0o8zn6t.css';
import '../../css/e/e2kwj58os.css';
import '../../css/g/giocgzmps.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGR3EvCeMv"><g class="wwvp95byt"><path class="no0o8zn6t"/><path class="e2kwj58os"/><path class="giocgzmps"/></g></mask></defs><path mask="url(#SVGR3EvCeMv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:playback-progress",
	});
}

export default Component;
