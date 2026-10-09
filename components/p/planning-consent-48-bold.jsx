import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frd-8-btx.css';
import '../../css/n/ngqac4bpf.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frd-8-btx"/><path class="ngqac4bpf"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:planning-consent-48-bold",
	});
}

export default Component;
