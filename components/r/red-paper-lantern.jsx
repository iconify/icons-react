import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq35cqbxq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq35cqbxq"/>`,
		"fallback": "fluent-emoji-high-contrast:red-paper-lantern",
	});
}

export default Component;
