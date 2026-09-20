import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs9a2ybxg.css';
import '../../css/w/wgs1lgb3u.css';
import '../../css/m/m15-ptwxd.css';
import '../../css/a/ab7x2lbyj.css';
import '../../css/q/qi68hf0dw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs9a2ybxg"/><path class="wgs1lgb3u"/><path class="m15-ptwxd"/><path class="ab7x2lbyj"/><path class="qi68hf0dw"/>`,
		"fallback": "selfhst:swarmpit",
	});
}

export default Component;
