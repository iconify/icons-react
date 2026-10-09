import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh0kzqbxb.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/y/yaza77bwx.css';
import '../../css/f/fuym42k5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh0kzqbxb"/><path class="ihmii9b0s"/><path class="yaza77bwx"/><path class="fuym42k5o"/>`,
		"fallback": "energy-icons:kiln-48-bold",
	});
}

export default Component;
