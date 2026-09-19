import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/avyldz2to.css';
import '../../css/e/etr3yzr0i.css';
import '../../css/q/q_5tlvw7r.css';
import '../../css/b/bhhizj98s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="avyldz2to"/><path class="etr3yzr0i"/><path class="q_5tlvw7r"/><path class="bhhizj98s"/></g>`,
		"fallback": "glyphs:scooter-side",
	});
}

export default Component;
