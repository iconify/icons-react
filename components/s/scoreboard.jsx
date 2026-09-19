import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tf6rn230q.css';
import '../../css/s/ssgpo9gdy.css';
import '../../css/p/plgn6t3fk.css';
import '../../css/l/lwothbb2u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6etfYbsL"><g class="v3_i3wktz"><rect class="tf6rn230q"/><path class="ssgpo9gdy"/><ellipse class="plgn6t3fk"/><path class="lwothbb2u"/></g></mask></defs><path mask="url(#SVG6etfYbsL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:scoreboard",
	});
}

export default Component;
