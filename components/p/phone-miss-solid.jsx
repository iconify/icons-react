import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4fpjkz2f.css';
import '../../css/j/jq6ai4chg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4fpjkz2f"/><path class="jq6ai4chg"/>`,
		"fallback": "basil:phone-miss-solid",
	});
}

export default Component;
