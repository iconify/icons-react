import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrndicbcc.css';
import '../../css/s/s6jez3btv.css';
import '../../css/s/s31t99skb.css';
import '../../css/p/pvk172brt.css';
import '../../css/m/mxjh6ab9k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrndicbcc"/><circle class="s6jez3btv"/><circle class="s31t99skb"/><circle class="pvk172brt"/><path class="mxjh6ab9k"/>`,
		"fallback": "carbon:observed-hail",
	});
}

export default Component;
