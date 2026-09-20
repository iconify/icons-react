import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn4spobzw.css';
import '../../css/g/gu1h78e1r.css';
import '../../css/b/bx3clim8s.css';

const viewBox = {"width":103,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn4spobzw"/><path class="gu1h78e1r"/><path class="bx3clim8s"/>`,
		"fallback": "octicon:lockup-github-24",
	});
}

export default Component;
