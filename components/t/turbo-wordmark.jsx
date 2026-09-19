import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxrr9-byy.css';
import '../../css/r/rtw15hrhy.css';
import '../../css/f/fhjblj9sh.css';
import '../../css/q/q6cfgtwrt.css';
import '../../css/p/p6qbovb2v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxrr9-byy"/><path class="rtw15hrhy"/><path class="fhjblj9sh"/><path clip-rule="evenodd" class="q6cfgtwrt"/><path class="p6qbovb2v"/>`,
		"fallback": "devicon:turbo-wordmark",
	});
}

export default Component;
