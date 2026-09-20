import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-7epyh_j.css';
import '../../css/a/avpk_juuj.css';
import '../../css/a/a1v6mobvx.css';
import '../../css/n/n9cgfy1lg.css';
import '../../css/y/yddqrgbzs.css';
import '../../css/j/j6hawpz5m.css';
import '../../css/c/cxhttubpp.css';
import '../../css/o/og4of9etz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-7epyh_j"/><path class="avpk_juuj"/><path class="a1v6mobvx"/><path class="n9cgfy1lg"/><path class="yddqrgbzs"/><path class="j6hawpz5m"/><path class="cxhttubpp"/><path class="og4of9etz"/>`,
		"fallback": "openmoji:person-with-crown",
	});
}

export default Component;
