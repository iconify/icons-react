import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9vm3113w.css';
import '../../css/n/nga9fqpvv.css';
import '../../css/f/flslue12j.css';
import '../../css/c/c7_999bjx.css';
import '../../css/n/nkzwsxb4t.css';
import '../../css/e/ez9jcpjax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9vm3113w"/><path class="nga9fqpvv"/><path class="flslue12j"/><path class="c7_999bjx"/><path class="nkzwsxb4t"/><path class="ez9jcpjax"/>`,
		"fallback": "selfhst:pufferfish-host",
	});
}

export default Component;
