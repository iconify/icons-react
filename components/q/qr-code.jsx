import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiyr-ntec.css';
import '../../css/w/wp8qz4bad.css';
import '../../css/b/bqapg30rg.css';
import '../../css/h/hny4-63og.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiyr-ntec"/><path class="wp8qz4bad"/><path class="bqapg30rg"/><path class="hny4-63og"/>`,
		"fallback": "carbon:qr-code",
	});
}

export default Component;
