import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufs9gw4qw.css';
import '../../css/l/llw25qk2j.css';
import '../../css/x/xgq8btbrg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ufs9gw4qw"/><path class="llw25qk2j"/><path class="xgq8btbrg"/>`,
		"fallback": "carbon:result-new",
	});
}

export default Component;
