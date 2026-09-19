import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/pvazv6bgg.css';
import '../../css/j/jf4k5ebnl.css';
import '../../css/t/t6mhapbsb.css';
import '../../css/i/ii2_g0sel.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnPP2Fbab"><g class="wwvp95byt"><path class="pvazv6bgg"/><path class="jf4k5ebnl"/><path class="t6mhapbsb"/><path class="ii2_g0sel"/></g></mask></defs><path mask="url(#SVGnPP2Fbab)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:radish-one",
	});
}

export default Component;
