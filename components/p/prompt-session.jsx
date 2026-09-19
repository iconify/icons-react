import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfqul596w.css';
import '../../css/d/drc7d7gig.css';
import '../../css/h/hzem-r0io.css';
import '../../css/x/x5lbktbtf.css';
import '../../css/w/wobm3acef.css';
import '../../css/v/vjbvj13aq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfqul596w"/><path class="drc7d7gig"/><circle class="hzem-r0io"/><circle class="x5lbktbtf"/><circle class="wobm3acef"/><path class="vjbvj13aq"/>`,
		"fallback": "carbon:prompt-session",
	});
}

export default Component;
