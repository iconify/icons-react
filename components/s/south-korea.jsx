import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7x5h9bzy.css';
import '../../css/l/lpmxo1cba.css';
import '../../css/o/ok1s67w0q.css';
import '../../css/u/uga0ovbvj.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7x5h9bzy"/><path class="lpmxo1cba"/><path class="ok1s67w0q"/><path class="uga0ovbvj"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:south-korea",
	});
}

export default Component;
