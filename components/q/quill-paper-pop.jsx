import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/g/g1t5syb2n.css';
import '../../css/o/ouwpkezvw.css';
import '../../css/z/zpvnbhb6s.css';
import '../../css/z/zb81w3b1d.css';
import '../../css/z/zoefegbhu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path clip-rule="evenodd" class="g1t5syb2n"/><path clip-rule="evenodd" class="ouwpkezvw"/><path class="zpvnbhb6s"/><path clip-rule="evenodd" class="zb81w3b1d"/><path clip-rule="evenodd" class="zoefegbhu"/></g>`,
		"fallback": "streamline-kameleon-color:quill-paper-pop",
	});
}

export default Component;
