import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htvfyybim.css';
import '../../css/m/msvj10bbi.css';
import '../../css/t/tssmllb5b.css';
import '../../css/t/tqwpy3nqa.css';
import '../../css/x/xnausu-yj.css';
import '../../css/c/cqsmt_b9i.css';
import '../../css/n/n-c8f34ja.css';
import '../../css/f/fu57xvodw.css';
import '../../css/g/g8gdv-b8w.css';
import '../../css/a/arjwlmqwq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="htvfyybim"/><path class="msvj10bbi"/><path class="tssmllb5b"/><path class="tqwpy3nqa"/><path class="xnausu-yj"/><path class="cqsmt_b9i"/><circle class="n-c8f34ja"/><circle class="fu57xvodw"/><path class="g8gdv-b8w"/><path class="arjwlmqwq"/></g>`,
		"fallback": "icon-park:tour-bus",
	});
}

export default Component;
