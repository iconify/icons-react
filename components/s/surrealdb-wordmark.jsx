import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywy3-kbcp.css';
import '../../css/h/hdkj9ybxw.css';
import '../../css/x/xpwcu5bdd.css';
import '../../css/t/tid_x98uq.css';
import '../../css/b/b5c7ocbpx.css';
import '../../css/p/p9_dk52ys.css';
import '../../css/v/vissfdb5s.css';
import '../../css/f/fyr47cbtf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywy3-kbcp"/><path class="hdkj9ybxw"/><path class="xpwcu5bdd"/><path class="tid_x98uq"/><path class="b5c7ocbpx"/><path class="p9_dk52ys"/><path class="vissfdb5s"/><path class="fyr47cbtf"/>`,
		"fallback": "devicon:surrealdb-wordmark",
	});
}

export default Component;
