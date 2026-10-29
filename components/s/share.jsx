import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-u-akler.css';
import '../../css/r/rqml68paw.css';
import '../../css/c/ct8c3ebvr.css';
import '../../css/z/zjic5uien.css';
import '../../css/k/kxto578pr.css';
import '../../css/c/cjdqrtg7j.css';
import '../../css/z/zi6r2l64x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-u-akler wm-shadow"/><path class="rqml68paw wm-k"/><path class="ct8c3ebvr wm-k"/><path class="wm-k zjic5uien"/><path class="kxto578pr wm-k"/><path class="cjdqrtg7j wm-k"/><path class="wm-shine zi6r2l64x"/>`,
		"fallback": "withicons-pastel:share",
	});
}

export default Component;
