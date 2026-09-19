import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flf817bsl.css';
import '../../css/u/ufhkon_xc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flf817bsl"/><path class="ufhkon_xc"/>`,
		"fallback": "ant-design:star-twotone",
	});
}

export default Component;
