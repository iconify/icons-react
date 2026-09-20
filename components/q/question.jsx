import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/j/jz878g.css';
import '../../css/n/nj20st.css';
import '../../css/s/so-from-30.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c jz878g"/><path class="a0m25c nj20st"/>`,
		"fallback": "line-md:question",
	});
}

export default Component;
