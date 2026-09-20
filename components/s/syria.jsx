import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlh45eb9v.css';
import '../../css/n/n-jag4bns.css';
import '../../css/i/icv5gjquf.css';
import '../../css/a/acm0z_bik.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlh45eb9v"/><path class="n-jag4bns"/><path class="icv5gjquf"/><path class="acm0z_bik"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:syria",
	});
}

export default Component;
