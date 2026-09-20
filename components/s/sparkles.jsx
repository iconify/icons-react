import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjh0oabnr.css';
import '../../css/q/qitfk8w1a.css';
import '../../css/e/elixecbzv.css';
import '../../css/b/bj1x_mbzh.css';
import '../../css/o/ont44lb9k.css';
import '../../css/m/m7c8wjb2c.css';
import '../../css/y/yjw5y8kvx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjh0oabnr"/><path class="qitfk8w1a"/><path class="elixecbzv"/><path class="bj1x_mbzh"/><path class="ont44lb9k"/><path class="m7c8wjb2c"/><path class="yjw5y8kvx"/>`,
		"fallback": "openmoji:sparkles",
	});
}

export default Component;
