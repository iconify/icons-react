import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/r/r5tlskk2v.css';
import '../../css/e/el5co48gm.css';
import '../../css/q/qk9ee1x_u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRMaSpcHZ"><g class="ufeehvblu"><path class="r5tlskk2v"/><path class="el5co48gm"/><path class="qk9ee1x_u"/></g></mask></defs><path mask="url(#SVGRMaSpcHZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:stopwatch",
	});
}

export default Component;
