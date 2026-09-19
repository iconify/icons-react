import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/p1r_41bpz.css';
import '../../css/x/xlrrn_4li.css';
import '../../css/w/wf3innpgg.css';
import '../../css/f/fwaij5b2p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9uGwD9fx"><g class="aql7dnt-u"><path class="p1r_41bpz"/><path class="xlrrn_4li"/><path class="wf3innpgg"/><path class="fwaij5b2p"/></g></mask></defs><path mask="url(#SVG9uGwD9fx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:peoples-two",
	});
}

export default Component;
