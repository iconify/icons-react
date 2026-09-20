import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pluaf6bjt.css';
import '../../css/d/db694ug1y.css';
import '../../css/k/k8u0_tjfc.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pluaf6bjt"/><path class="db694ug1y"/><path class="k8u0_tjfc"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:singapore",
	});
}

export default Component;
