import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7x5h9bzy.css';
import '../../css/p/p1lht5b3m.css';
import '../../css/j/jkyj759qc.css';
import '../../css/u/utn8oabca.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7x5h9bzy"/><path class="p1lht5b3m"/><path class="jkyj759qc"/><path class="utn8oabca"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:iraq",
	});
}

export default Component;
