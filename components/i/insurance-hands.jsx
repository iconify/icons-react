import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/u/u5s3sjh5i.css';
import '../../css/e/evfape6gb.css';
import '../../css/z/zepxq8nkd.css';
import '../../css/c/c82y2k39f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="u5s3sjh5i"/><path class="evfape6gb"/><path class="zepxq8nkd"/><path class="c82y2k39f"/></g>`,
		"fallback": "streamline-sharp-color:insurance-hands",
	});
}

export default Component;
