import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uev-y9bxq.css';
import '../../css/h/hurcj9b3v.css';
import '../../css/v/v758r-tyc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="uev-y9bxq"/><path class="hurcj9b3v"/><path class="v758r-tyc"/>`,
		"fallback": "carbon:shrink-screen-filled",
	});
}

export default Component;
