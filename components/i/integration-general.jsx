import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk9ky-bpe.css';
import '../../css/q/qnu9x_btz.css';
import '../../css/q/qgw5s4bhc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mk9ky-bpe"/><path class="qnu9x_btz"/><path clip-rule="evenodd" class="qgw5s4bhc"/>`,
		"fallback": "oui:integration-general",
	});
}

export default Component;
