import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqyns6bnn.css';
import '../../css/n/n75ow_brw.css';
import '../../css/w/wpkm073zg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqyns6bnn"/><path class="n75ow_brw"/><path class="wpkm073zg"/>`,
		"fallback": "selfhst:trailarr-light",
	});
}

export default Component;
