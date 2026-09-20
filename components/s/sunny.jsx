import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/m/mo0t0x.css';
import '../../css/m/ml9e2l.css';
import '../../css/f/fyi9-p.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c mo0t0x"/><path class="a0m25c ml9e2l"/><path class="a0m25c fyi9-p"/>`,
		"fallback": "line-md:sunny",
	});
}

export default Component;
