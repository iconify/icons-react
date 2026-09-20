import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/opxypliai.css';
import '../../css/z/zcqfw3b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="opxypliai"/><path class="zcqfw3b8t"/></g>`,
		"fallback": "mage:package-box",
	});
}

export default Component;
