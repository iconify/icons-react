import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6jdizb9p.css';
import '../../css/g/griwawmpa.css';
import '../../css/d/dygw907sv.css';
import '../../css/j/jxcjplb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6jdizb9p"/><path clip-rule="evenodd" class="griwawmpa"/><path clip-rule="evenodd" class="dygw907sv"/><path clip-rule="evenodd" class="jxcjplb8y"/>`,
		"fallback": "bitcoin-icons:moon-filled",
	});
}

export default Component;
