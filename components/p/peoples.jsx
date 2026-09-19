import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pzosztbse.css';
import '../../css/h/hkuwvwbvi.css';
import '../../css/y/ylhp4cc8g.css';
import '../../css/s/sj6rcj4hn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGV81Qidve"><g class="aql7dnt-u"><path class="pzosztbse"/><path class="hkuwvwbvi"/><path class="ylhp4cc8g"/><path class="sj6rcj4hn"/></g></mask></defs><path mask="url(#SVGV81Qidve)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:peoples",
	});
}

export default Component;
