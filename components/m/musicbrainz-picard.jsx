import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axfhcvc4t.css';
import '../../css/z/z1mnl9v4i.css';
import '../../css/j/junl_bcxy.css';
import '../../css/e/e6p6b3szq.css';
import '../../css/b/bj5mtz6uf.css';
import '../../css/t/t9rh3k1rg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axfhcvc4t"/><path class="z1mnl9v4i"/><path class="junl_bcxy"/><path class="e6p6b3szq"/><path class="bj5mtz6uf"/><path class="t9rh3k1rg"/>`,
		"fallback": "selfhst:musicbrainz-picard",
	});
}

export default Component;
