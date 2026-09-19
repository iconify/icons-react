import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/x/x93rdmd5d.css';
import '../../css/y/yvibkqbla.css';
import '../../css/y/yms0hyb2t.css';
import '../../css/j/j3d5ycb4e.css';
import '../../css/d/dmg-7rblv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiKItZbcd"><g class="hv130ab-t"><rect class="x93rdmd5d"/><path class="yvibkqbla"/><path class="yms0hyb2t"/><path class="j3d5ycb4e"/><path class="dmg-7rblv"/></g></mask></defs><path mask="url(#SVGiKItZbcd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:luggage",
	});
}

export default Component;
