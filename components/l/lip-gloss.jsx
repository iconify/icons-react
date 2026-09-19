import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/j/jh506iphg.css';
import '../../css/c/cz-xh6lnw.css';
import '../../css/c/c9e4w6bhq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBeBcAesw"><g class="hv130ab-t"><path class="jh506iphg"/><path class="cz-xh6lnw"/><path class="c9e4w6bhq"/></g></mask></defs><path mask="url(#SVGBeBcAesw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lip-gloss",
	});
}

export default Component;
