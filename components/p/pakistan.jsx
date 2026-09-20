import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tay4xd-8e.css';
import '../../css/e/e4eliqbra.css';
import '../../css/e/e9_xhvbgz.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tay4xd-8e"/><path class="e4eliqbra"/><path class="e9_xhvbgz"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:pakistan",
	});
}

export default Component;
