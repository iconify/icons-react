import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs1so-b4l.css';
import '../../css/w/wobm3acef.css';
import '../../css/x/x5lbktbtf.css';
import '../../css/h/hzem-r0io.css';
import '../../css/v/vjbvj13aq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs1so-b4l"/><circle class="wobm3acef"/><circle class="x5lbktbtf"/><circle class="hzem-r0io"/><path class="vjbvj13aq"/>`,
		"fallback": "carbon:prompt-template",
	});
}

export default Component;
