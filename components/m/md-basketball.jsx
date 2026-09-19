import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws3ao_gvd.css';
import '../../css/i/ipgap6l9e.css';
import '../../css/s/s6gvaj4gx.css';
import '../../css/b/btwpxcthz.css';
import '../../css/j/j-xmx-liq.css';
import '../../css/d/dcsh50byk.css';
import '../../css/s/sg2hs69ge.css';
import '../../css/i/iuz0xkb6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws3ao_gvd"/><path class="ipgap6l9e"/><path class="s6gvaj4gx"/><path class="btwpxcthz"/><path class="j-xmx-liq"/><path class="dcsh50byk"/><path class="sg2hs69ge"/><path class="iuz0xkb6u"/>`,
		"fallback": "ion:md-basketball",
	});
}

export default Component;
