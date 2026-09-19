import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zllmftbax.css';
import '../../css/k/kot2fq0bc.css';
import '../../css/a/a4kaplbpc.css';
import '../../css/k/k2rcg5b0a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zllmftbax"/><path class="kot2fq0bc"/><path class="a4kaplbpc"/><path class="k2rcg5b0a"/>`,
		"fallback": "ion:magnet-outline",
	});
}

export default Component;
