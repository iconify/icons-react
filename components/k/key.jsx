import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yzf1ci52v.css';
import '../../css/h/h81wjbclo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yzf1ci52v"/><path class="h81wjbclo"/></g>`,
		"fallback": "mage:key",
	});
}

export default Component;
