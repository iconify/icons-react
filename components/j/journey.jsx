import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgo8x6bpg.css';
import '../../css/j/jlyrc5lbw.css';
import '../../css/i/i-lvykbcq.css';
import '../../css/c/c2bjy1bct.css';
import '../../css/r/rff5n-b1t.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="ipSJourney0"><g class="ft5dv1b6b"><g clip-path="url(#ipSJourney1)" class="sgo8x6bpg"><path class="jlyrc5lbw"/><path class="i-lvykbcq"/><path class="c2bjy1bct"/><path class="rff5n-b1t"/></g><defs><clipPath id="ipSJourney1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSJourney0)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:journey",
	});
}

export default Component;
