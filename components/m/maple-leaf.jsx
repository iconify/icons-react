import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snp287xku.css';
import '../../css/f/fopv7ibks.css';
import '../../css/u/umgjheujn.css';
import '../../css/y/yuo7fm28c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snp287xku"/><path class="fopv7ibks"/><path class="umgjheujn"/><path class="yuo7fm28c"/>`,
		"fallback": "streamline-emojis:maple-leaf",
	});
}

export default Component;
