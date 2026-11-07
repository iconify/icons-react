import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-fn14bsx.css';
import '../../css/r/rzfigt_wj.css';
import '../../css/n/nv0ks132c.css';
import '../../css/d/dpktspbaa.css';
import '../../css/s/s8kjxnw5q.css';
import '../../css/g/gvx018bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-fn14bsx"/><path clip-rule="evenodd" class="rzfigt_wj"/><path clip-rule="evenodd" class="nv0ks132c"/><path class="dpktspbaa"/><path class="s8kjxnw5q"/><path class="gvx018bix"/>`,
		"fallback": "solar:vanity-bold-duotone",
	});
}

export default Component;
