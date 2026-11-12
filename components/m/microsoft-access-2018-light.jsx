import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwc5rnbvb.css';
import '../../css/h/hp0eg7bwe.css';
import '../../css/i/i0fe7jb1f.css';
import '../../css/t/tlmciol3y.css';
import '../../css/p/plsr1krgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="jwc5rnbvb"/><path class="hp0eg7bwe"/><path class="i0fe7jb1f"/><path class="tlmciol3y"/><path class="plsr1krgd"/>`,
		"fallback": "selfhst:microsoft-access-2018-light",
	});
}

export default Component;
