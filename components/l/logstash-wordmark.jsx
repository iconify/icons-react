import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5pdzmbry.css';
import '../../css/l/lm8lx4btl.css';
import '../../css/d/dvg27y9mf.css';
import '../../css/o/oi-s5cbqj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5pdzmbry"/><path class="lm8lx4btl"/><path class="dvg27y9mf"/><path class="oi-s5cbqj"/>`,
		"fallback": "devicon:logstash-wordmark",
	});
}

export default Component;
