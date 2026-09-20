import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jn1az9bta.css';
import '../../css/t/t5jl9db7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jn1az9bta"/><path class="t5jl9db7n"/></g>`,
		"fallback": "reicon:user-octagon",
	});
}

export default Component;
