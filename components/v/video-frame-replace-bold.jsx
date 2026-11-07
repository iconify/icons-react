import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk-c-dr8y.css';
import '../../css/q/qv7-4y_3h.css';
import '../../css/i/i42-flb7s.css';
import '../../css/j/jqdefod9t.css';
import '../../css/b/b01kjwbuu.css';
import '../../css/t/tykwk4byk.css';
import '../../css/w/wzhqxhbet.css';
import '../../css/t/t8qkxhbjo.css';
import '../../css/b/bz0brqbeg.css';
import '../../css/y/y_nyt9sdc.css';
import '../../css/n/nmgediz1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk-c-dr8y"/><path class="qv7-4y_3h"/><path class="i42-flb7s"/><path class="jqdefod9t"/><path class="b01kjwbuu"/><path class="tykwk4byk"/><path class="wzhqxhbet"/><path class="t8qkxhbjo"/><path class="bz0brqbeg"/><path class="y_nyt9sdc"/><path clip-rule="evenodd" class="nmgediz1h"/>`,
		"fallback": "solar:video-frame-replace-bold",
	});
}

export default Component;
