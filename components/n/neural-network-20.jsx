import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jithrbamh.css';
import '../../css/a/abeu7fb-k.css';
import '../../css/a/a40uxxbuo.css';
import '../../css/d/dyg3u9bac.css';
import '../../css/c/cz9a8mbyz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jithrbamh"/><path class="abeu7fb-k"/><path class="a40uxxbuo"/><path class="dyg3u9bac"/><path class="cz9a8mbyz"/>`,
		"fallback": "energy-icons:neural-network-20",
	});
}

export default Component;
