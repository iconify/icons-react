import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzgvn4bnp.css';
import '../../css/y/y8j3udq6o.css';
import '../../css/v/vyby-xbyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzgvn4bnp"/><path class="y8j3udq6o"/><path class="vyby-xbyp"/>`,
		"fallback": "selfhst:radicle-dark",
	});
}

export default Component;
