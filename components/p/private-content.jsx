import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-srhgbjw.css';
import '../../css/i/io-ksobwe.css';
import '../../css/d/dhxhj3byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-srhgbjw"/><path class="io-ksobwe"/><path class="dhxhj3byh"/>`,
		"fallback": "stash:private-content",
	});
}

export default Component;
